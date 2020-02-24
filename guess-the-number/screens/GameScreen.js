/* eslint-disable max-len */
import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Card from '../components/Card';
import colors from '../constants/colors';

const LIMITS = {
  MIN_LIMIT: 1,
  MAX_LIMIT: 100
};

const USER_ACTIONS = {
  LOWER: 'lower',
  GREATER: 'greater'
};

const generateRandomNumber = (currentLowerLimit, currentUpperLimit, excludedNumber) => {
  currentLowerLimit = Math.ceil(currentLowerLimit);
  currentUpperLimit = Math.floor(currentUpperLimit);
  const randomNumber = Math.floor(Math.random() * (currentUpperLimit - currentLowerLimit) + currentLowerLimit);
  if (randomNumber === excludedNumber) {
    return generateRandomNumber(currentLowerLimit, currentUpperLimit, excludedNumber);
  }
  return randomNumber;
};

const GameScreen = ({ navigation, route }) => {
  const { selectedNumber } = route.params;

  const [guessedNumber, setGuessedNumber] = useState(generateRandomNumber(LIMITS.MIN_LIMIT, LIMITS.MAX_LIMIT, selectedNumber));
  const [gameFinished, setGameFinished] = useState(guessedNumber === selectedNumber);
  const [counter, setCounter] = useState(0);

  const currentLow = useRef(LIMITS.MIN_LIMIT);
  const currentHigh = useRef(LIMITS.MAX_LIMIT);

  if (gameFinished) {
    navigation.navigate('GameFinished', {
      computerWon: guessedNumber === selectedNumber,
      counter,
      selectedNumber
    });
  }

  const guessNextNumberHandler = (direction) => {
    if ((direction === USER_ACTIONS.LOWER && guessedNumber < selectedNumber) || (direction === USER_ACTIONS.GREATER && guessedNumber > selectedNumber)) {
      Alert.alert('Don\'t lie, human!', 'The guess must be greater.', [{ text: 'Sorry', style: 'default', onPress: () => {} }]);
      return;
    }

    // Note: the component doesn't get re-rendered when we change refs.
    if (direction === USER_ACTIONS.LOWER) {
      currentHigh.current = guessedNumber;
    } else {
      currentLow.current = guessedNumber;
    }

    const nextNumber = generateRandomNumber(currentLow.current, currentHigh.current, guessedNumber);
    const nextCounter = counter + 1;
    const isGameFinished = nextNumber === selectedNumber || nextCounter === 5;
    setCounter(nextCounter);
    setGameFinished(isGameFinished);
    setGuessedNumber(nextNumber);
  };

  return (
    <View style={styles.container}>
      <Card style={styles.cardContainer}>
        <Text style={styles.guessedNumberText}>{guessedNumber}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.greaterLowerButton} onPress={guessNextNumberHandler.bind(this, USER_ACTIONS.LOWER)}>
            <AntDesign name="minus" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.greaterLowerButton} onPress={guessNextNumberHandler.bind(this, USER_ACTIONS.GREATER)}>
            <AntDesign name="plus" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardContainer: {
    alignItems: 'center',
    width: 300,
    maxWidth: '80%'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  },
  guessedNumberText: {
    fontSize: 70,
    fontStyle: 'italic'
  },
  greaterLowerButton: {
    alignItems: 'center',
    width: 40,
    height: 40,
    backgroundColor: colors.primary,
    padding: 10,
    margin: 10,
    borderRadius: 20
  },
  numberMatchedButton: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 20
  }
});

export default GameScreen;

/* eslint-disable max-len */
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity
} from 'react-native';

import Card from '../components/Card';
import colors from '../constants/colors';

const LIMITS = {
  MIN_LIMIT: 0,
  MAX_LIMIT: 99
};

const generateRandomNumber = (currentLowerLimit, currentUpperLimit) => parseInt((Math.random() * currentUpperLimit) + currentLowerLimit);

const GameScreen = (props) => {
  const [numbers, setNumbers] = useState({
    lowerLimit: LIMITS.MIN_LIMIT,
    upperLimit: LIMITS.MAX_LIMIT,
    guessedNumber: generateRandomNumber(LIMITS.MIN_LIMIT, LIMITS.MAX_LIMIT),
    counter: 0
  });

  const lowerEstimationHandler = () => {
    if (numbers.guessedNumber < LIMITS.MAX_LIMIT) {
      setNumbers((prevState) => ({
        ...prevState,
        upperLimit: prevState.guessedNumber,
        guessedNumber: generateRandomNumber(prevState.lowerLimit, prevState.guessedNumber),
        counter: prevState.counter + 1
      }));
    } else {
      setNumbers((prevState) => ({
        ...prevState,
        guessedNumber: generateRandomNumber(prevState.lowerLimit, prevState.upperLimit),
        counter: prevState.counter + 1
      }));
    }
  };

  const greaterEstimationHandler = () => {
    if (numbers.guessedNumber > LIMITS.MIN_LIMIT) {
      setNumbers((prevState) => ({
        ...prevState,
        lowerLimit: prevState.guessedNumber,
        guessedNumber: generateRandomNumber(prevState.guessedNumber, prevState.upperLimit),
        counter: prevState.counter + 1
      }));
    } else {
      setNumbers((prevState) => ({
        ...prevState,
        guessedNumber: generateRandomNumber(prevState.lowerLimit, prevState.upperLimit),
        counter: prevState.counter + 1
      }));
    }
  };

  const numberMatchedHandler = () => {
    Alert.alert('Game finished!', 'Your cell phone is more intelligent than you :)', [{ text: 'haha thanks!', style: 'default', onPress: () => {} }]);
  };

  return (
    <View style={styles.container}>
      <Card style={styles.cardContainer}>
        <Text style={styles.guessedNumberText}>{numbers.counter >= 5 ? 'You won, fucking human.' : numbers.guessedNumber}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.greaterLowerButton} onPress={lowerEstimationHandler}>
            <Text style={styles.greaterLowerText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.greaterLowerButton} onPress={greaterEstimationHandler}>
            <Text style={styles.greaterLowerText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.numberMatchedButton} onPress={numberMatchedHandler}>
          <Text style={styles.numberMatchedText}>This is the number!</Text>
        </TouchableOpacity>
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
    justifyContent: 'space-around',
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
    borderRadius: 20
  },
  greaterLowerText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 20
  },
  numberMatchedButton: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 20
  },
  numberMatchedText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 15
  }
});

export default GameScreen;

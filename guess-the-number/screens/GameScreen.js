/* eslint-disable max-len */
import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert
} from 'react-native';

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

  let display = null;
  if (numbers.counter === 5) {
    display = <Text>You won, fucking human.</Text>;
  } else {
    display = (
      <View>
        <Text>{numbers.guessedNumber}</Text>
        <Button
          style={styles.lowerButton}
          title="Lower"
          onPress={lowerEstimationHandler}
        />
        <Button
          style={styles.greaterButton}
          title="Greater"
          onPress={greaterEstimationHandler}
        />
        <Button
          style={styles.numberMatchedButton}
          title="This is the number!"
          onPress={numberMatchedHandler}
        />
      </View>
    );
  }

  return display;
};

const styles = StyleSheet.create({
  lowerButton: {

  },
  greaterButton: {

  },
  numberMatchedButton: {

  },
});

export default GameScreen;

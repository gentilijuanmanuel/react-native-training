import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard, // Note: this is not a component, it's an API to interact with the native keyboard
  Alert // Note: this is not a component, it's an API to interact with the native keyboard
} from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import colors from '../constants/colors';

const StartGameScreen = ({ navigation }) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const changedTextHandler = (inputText) => setEnteredValue(inputText.replace(/[^0-9]/, ''));

  const resetNumberHandler = () => {
    setConfirmed(false);
    setEnteredValue('');
  };

  const confirmNumberHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Oops!', 'Enter something between 1 and 99.', [{ text: 'Ok', style: 'destructive', onPress: resetNumberHandler }]);
      return;
    }

    // Note: the three states will be setted in only one render cycle
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue('');
    Keyboard.dismiss();
  };

  const renderConfirmedNumberOutput = () => (
    <Card style={styles.chosenNumberContainer}>
      <Text>You selected</Text>
      <Text style={styles.selectedNumberText}>{selectedNumber}</Text>
      <Button
        title="Let's go!"
        color={colors.primary}
        onPress={() => navigation.navigate('Game')}
      />
    </Card>
  );

  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
      <View style={styles.screenContainer}>
        <Text style={styles.title}>Start a new game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Choose a number</Text>
          <Input
            style={styles.input}
            keyboardType="number-pad"
            blurOnSubmit
            autoCorrect={false}
            maxLength={2}
            onChangeText={changedTextHandler}
            value={enteredValue}
          />
          <View style={styles.buttonsContainer}>
            <Button
              title="Reset"
              styles={styles.button}
              color={colors.accent}
              onPress={resetNumberHandler}
            />
            <Button
              title="Start"
              styles={styles.button}
              color={colors.primary}
              onPress={confirmNumberHandler}
            />
          </View>
        </Card>
        {confirmed && renderConfirmedNumberOutput()}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  inputContainer: {
    alignItems: 'center',
    width: 300,
    maxWidth: '80%'
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  },
  title: {
    marginVertical: 10,
    fontSize: 20
  },
  button: {
    width: 100
  },
  input: {
    width: 50,
    textAlign: 'center'
  },
  chosenNumberContainer: {
    marginTop: 30,
    alignItems: 'center',
    width: 300,
    maxWidth: '80%'
  },
  selectedNumberText: {
    fontSize: 70,
    fontStyle: 'italic'
  }
});

export default StartGameScreen;

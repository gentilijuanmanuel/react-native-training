import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
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
      <Text style={styles.description}>You selected</Text>
      <Text style={styles.selectedNumberText}>{selectedNumber}</Text>
      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => navigation.navigate('Game', { selectedNumber })}
      >
        <Text style={styles.primaryButtonDescription}>Let's go!</Text>
      </TouchableOpacity>
    </Card>
  );

  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
      <View style={styles.screenContainer}>
        <Text style={styles.title}>Start a new game!</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.description}>Choose a number</Text>
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
            <TouchableOpacity
              style={styles.accentButton}
              onPress={resetNumberHandler}
            >
              <Text style={styles.accentButtonDescription}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={confirmNumberHandler}
            >
              <Text style={styles.primaryButtonDescription}>Start</Text>
            </TouchableOpacity>
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
    fontSize: 20,
    fontFamily: 'montserrat'
  },
  description: {
    fontFamily: 'montserrat'
  },
  primaryButton: {
    alignItems: 'center',
    width: 100,
    height: 40,
    backgroundColor: colors.primary,
    padding: 10,
    margin: 20,
    borderRadius: 20
  },
  accentButton: {
    alignItems: 'center',
    width: 100,
    height: 40,
    padding: 10,
    margin: 20,
    borderRadius: 20
  },
  primaryButtonDescription: {
    color: 'white',
    fontFamily: 'montserrat'
  },
  accentButtonDescription: {
    color: colors.primary,
    fontFamily: 'montserrat'
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

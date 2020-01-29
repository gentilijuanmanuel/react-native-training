import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import colors from '../constants/colors';

const StartGameScreen = (props) => {
  const {} = props;

  return (
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

        />
        <View style={styles.buttonsContainer}>
          <View styles={styles.button}>
            <Button title="Reset" color={colors.accent} />
          </View>
          <View styles={styles.button}>
            <Button title="Start" color={colors.primary} />
          </View>
        </View>
      </Card>
    </View>
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
  }
});

export default StartGameScreen;

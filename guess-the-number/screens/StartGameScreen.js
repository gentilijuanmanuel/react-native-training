import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button
} from 'react-native';
import Card from '../components/Card';

const StartGameScreen = (props) => {
  const {} = props;

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.title}>Start a new game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Choose a number</Text>
        <TextInput />
        <View style={styles.buttonsContainer}>
          <Button title="Reset" />
          <Button title="Start" />
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
  }
});

export default StartGameScreen;

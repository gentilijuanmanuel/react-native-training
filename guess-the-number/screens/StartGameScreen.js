import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button
} from 'react-native';

const StartGameScreen = (props) => {
  const {} = props;

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.title}>Start a new game!</Text>
      <View style={styles.inputContainer}>
        <Text>Choose a number</Text>
        <TextInput />
        <View style={styles.buttonsContainer}>
          <Button title="Reset" />
          <Button title="Start" />
        </View>
      </View>
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
    maxWidth: '80%',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: 'white',
    elevation: 8,
    padding: 20,
    borderRadius: 10
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

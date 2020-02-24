import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

import colors from '../constants/colors';

const GameFinishedScreen = ({ navigation, route }) => {
  const { computerWon, selectedNumber, counter } = route.params;

  const message = computerWon ? 'I\'m more intelligent than you!' : 'You won, fucking human.';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game finished</Text>
      <Text style={styles.description}>{message}</Text>
      <Text style={styles.description}>
        Selected number:
        {' '}
        {selectedNumber}
      </Text>
      <Text style={styles.description}>
        Number of rounds:
        {' '}
        {counter}
      </Text>
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.navigate('StartGame')}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 34,
    fontStyle: 'italic'
  },
  description: {
    textAlign: 'center',
    fontSize: 12
  },
  closeButton: {
    alignItems: 'center',
    width: 100,
    height: 40,
    backgroundColor: colors.primary,
    padding: 10,
    margin: 20,
    borderRadius: 20
  },
  closeButtonText: {
    color: 'white'
  }
});

export default GameFinishedScreen;

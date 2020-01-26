import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header style={styles.header} title="Guess a number" />
      <View style={styles.content}>
        <Text>Content!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  header: {
    height: '20%'
  },
  content: {
    height: '90%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const CocktailsScreen = (props) => {
  const {} = props;
  return (
    <View style={styles.screenContainer}>
      <Text>Cocktails screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default CocktailsScreen;

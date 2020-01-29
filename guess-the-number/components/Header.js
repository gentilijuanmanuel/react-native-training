import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {
  const { title } = props;

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    backgroundColor: '#f7287b',
    height: 100
  },
  headerTitle: {
    fontSize: 30,
    color: 'white'
  }
});

export default Header;

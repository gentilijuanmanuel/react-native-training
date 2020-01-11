import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const GoalItem = props => {
  const { goal } = props;

  return (
    <View
      key={goal}
      style={styles.goalItem}>
      <Text>{goal.item.value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    padding: 10,
    marginBottom: 5,
    backgroundColor: '#ffe7bd',
    borderRadius: 10,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default GoalItem;

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

const GoalItem = (props) => {
  const { goal, onDelete } = props;

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => onDelete(goal.item.key)}>
      <View key={goal} style={styles.goalItem}>
        <Text>{goal.item.value}</Text>
      </View>
    </TouchableOpacity>
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

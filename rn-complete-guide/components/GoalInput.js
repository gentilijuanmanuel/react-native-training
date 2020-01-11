import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const handleChangeEnteredGoal = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const {
    handleAddGoal
  } = props;

  return (
    <View style={styles.addGoalView}>
      <TextInput
        style={styles.textInput}
        placeholder="Course goal"
        onChangeText={handleChangeEnteredGoal}
        value={enteredGoal} />
      <Button
        title="Add"
        onPress={() => handleAddGoal(enteredGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  addGoalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30
  },
  textInput: {
    width: '80%',
    borderBottomColor: '#ffe7bd',
    borderBottomWidth: 1,
    padding: 10
  },
});

export default GoalInput;

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal
} from 'react-native';

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const { onAddGoal, onCancel, isVisible } = props;

  const handleChangeEnteredGoal = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const handleAddGoal = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal style={styles.modal} visible={isVisible} animationType="slide">
      <View style={styles.addGoalView}>
        <TextInput
          style={styles.textInput}
          placeholder="Course goal"
          onChangeText={handleChangeEnteredGoal}
          value={enteredGoal}
        />
        <View style={styles.addCancelButtonsContainer}>
          <View style={styles.buttons}>
            <Button
              title="Cancel"
              color="red"
              onPress={onCancel}
            />
          </View>
          <View style={styles.buttons}>
            <Button
              title="Add"
              onPress={handleAddGoal}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  addGoalView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    flex: 1
  },
  textInput: {
    width: '80%',
    borderBottomColor: '#ffe7bd',
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  addCancelButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%'
  },
  buttons: {
    width: '40%'
  },
  modal: {
    backgroundColor: 'yellow'
  }
});

export default GoalInput;

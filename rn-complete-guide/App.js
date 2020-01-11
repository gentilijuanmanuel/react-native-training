import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, FlatList } from 'react-native';

const App = () => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const handleChangeEnteredGoal = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const handleAddGoal = () => {
    setEnteredGoal('');
    setCourseGoals(courseGoals => [...courseGoals, { key: Math.random().toString(), value: enteredGoal }]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.addGoalView}>
        <TextInput
          style={styles.textInput}
          placeholder="Course goal"
          onChangeText={handleChangeEnteredGoal}
          value={enteredGoal} />
        <Button title="Add" onPress={handleAddGoal} />
      </View>
      <FlatList
        style={styles.goalsScrollView}
        data={courseGoals}
        renderItem={courseGoal => (
          <View key={courseGoal} style={styles.goalItem}>
            <Text>{courseGoal.item.value}</Text>
          </View>)}>
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingBottom: 120,
    paddingLeft: 40,
    paddingRight: 40,
    flex: 1
  },
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
  goalItem: {
    padding: 10,
    marginBottom: 5,
    backgroundColor: '#ffe7bd',
    borderRadius: 10,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  goalsScrollView: {
    flex: 1
  }
});

export default App;

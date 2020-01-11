import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);

  const handleAddGoal = goal => {
    setCourseGoals(courseGoals => [...courseGoals, { key: Math.random().toString(), value: goal }]);
  }

  const handleOnDeleteGoal = goalKey => {
    setCourseGoals(courseGoals => [...courseGoals.filter(courseGoal => courseGoal.key != goalKey)]);
  }

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={handleAddGoal} />
      <FlatList
        style={styles.goalsFlatView}
        data={courseGoals}
        renderItem={courseGoal => <GoalItem goal={courseGoal} onDelete={handleOnDeleteGoal} />}>
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
  goalsFlatView: {
    flex: 1
  }
});

export default App;

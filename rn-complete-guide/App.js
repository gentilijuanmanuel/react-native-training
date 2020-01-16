import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Button
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const handleAddGoal = (goal) => {
    // Note: React will apply the two changes once (no double rendering)
    setCourseGoals((courseGoals) => [...courseGoals, { key: Math.random().toString(), value: goal }]);
    setIsAddMode(false);
  };

  const handleOnDeleteGoal = (goalKey) => {
    setCourseGoals((courseGoals) => [...courseGoals.filter((courseGoal) => courseGoal.key !== goalKey)]);
  };

  const handleCancel = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Add new goal" onPress={() => setIsAddMode(true)} />
      <GoalInput onAddGoal={handleAddGoal} onCancel={handleCancel} isVisible={isAddMode} />
      <FlatList
        style={styles.goalsFlatView}
        data={courseGoals}
        renderItem={(courseGoal) => <GoalItem goal={courseGoal} onDelete={handleOnDeleteGoal} />}
      />
    </View>
  );
};

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

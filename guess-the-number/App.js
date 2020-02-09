import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="StartGame"
          component={StartGameScreen}
          options={{ title: 'Guess a number' }}
        />
        <Stack.Screen
          name="Game"
          component={GameScreen}
          options={{ title: 'Guess a number' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

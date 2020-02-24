import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameFinishedScreen from './screens/GameFinishedScreen';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      name="StartGame"
      component={StartGameScreen}
      options={{ title: 'Start game' }}
    />
    <MainStack.Screen
      name="Game"
      component={GameScreen}
      options={{ title: 'Game' }}
    />
  </MainStack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="GuessTheNumber"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="GameFinished"
          component={GameFinishedScreen}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

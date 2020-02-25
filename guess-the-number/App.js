import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameFinishedScreen from './screens/GameFinishedScreen';
import colors from './constants/colors';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const fetchFonts = () => {
  Font.loadAsync({
    // eslint-disable-next-line quote-props
    'montserrat': require('./assets/Fonts/Montserrat-Regular.ttf'),
    // eslint-disable-next-line global-require
    'montserrat-bold': require('./assets/Fonts/Montserrat-Bold.ttf')
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(error) => console.log(error)}
      />
    );
  }

  const MainStackScreen = () => (
    <MainStack.Navigator>
      <MainStack.Screen
        name="StartGame"
        component={StartGameScreen}
        options={{
          title: 'Start game',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.primary
          }
        }}
      />
      <MainStack.Screen
        name="Game"
        component={GameScreen}
        options={{
          title: 'Game',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.primary
          }
        }}
      />
    </MainStack.Navigator>
  );

  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="GuessTheNumber"
          component={MainStackScreen}
          options={{
            headerShown: false,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: colors.primary
            }
          }}
        />
        <RootStack.Screen
          name="GameFinished"
          component={GameFinishedScreen}
          options={{
            headerShown: false,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: colors.primary
            }
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

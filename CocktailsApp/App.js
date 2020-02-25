import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from './screens/WelcomeScreen';
import CocktailsScreen from './screens/CocktailsScreen';

import colors from './constants/colors';

const RootStack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <RootStack.Navigator>
      <RootStack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.primary,
          },
        }}
      />
      <RootStack.Screen
        name="CocktailsScreen"
        component={CocktailsScreen}
        options={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.primary,
          },
        }}
      />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default App;

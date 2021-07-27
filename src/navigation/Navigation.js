import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MainTabsScreen } from './tabbars/MainTabbar';
import AuthScreen from '../screens/AuthScreen/AuthScreen';

const ModalStack = createStackNavigator();

const MainScreen = () => (
  <NavigationContainer>
    <ModalStack.Navigator mode="modal" headerMode="none">
      <ModalStack.Screen name="Main" component={MainTabsScreen} />
      <ModalStack.Screen name="Auth" component={AuthScreen} />
    </ModalStack.Navigator>
  </NavigationContainer>
);

export { MainScreen };

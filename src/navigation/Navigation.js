import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { EventDetailsScreen } from '../screens/EventDetailsScreen/EventDetailsScreen';
import { ProfileEditScreen } from '../screens/ProfileEditScreen/ProfileEditScreen';
import { MainTabsScreen } from './tabbars/MainTabbar';
import { AuthScreen } from '../screens/AuthScreen/AuthScreen';

import { headerStyle } from './styles';

const MainStack = createStackNavigator();

const MainScreen = () => (
  <NavigationContainer>
    <MainStack.Navigator mode="modal" screenOptions={headerStyle}>
      <MainStack.Screen
        name="Main"
        component={MainTabsScreen}
        options={{ headerShown: false }}
      />
      <MainStack.Screen name="Auth" component={AuthScreen} />
      <MainStack.Screen
        name="EventDetails"
        component={EventDetailsScreen}
        options={() => ({ title: 'Детали события' })}
      />
      <MainStack.Screen
        name="ProfileEdit"
        component={ProfileEditScreen}
        options={() => ({ title: 'Редактировать' })}
      />
    </MainStack.Navigator>
  </NavigationContainer>
);

export { MainScreen };

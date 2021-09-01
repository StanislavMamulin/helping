import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ProfileScreen } from '../../screens/ProfileScreen/ProfileScreen';

import { headerStyle } from '../styles';

const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => (
  <ProfileStack.Navigator screenOptions={headerStyle}>
    <ProfileStack.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={() => ({ title: 'Профиль' })}
    />
  </ProfileStack.Navigator>
);

export { ProfileStackScreen };

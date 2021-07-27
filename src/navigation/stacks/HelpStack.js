import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HelpScreen from '../../screens/HelpScreen/HelpScreen';
import { headerStyle } from '../styles';

const HelpStack = createStackNavigator();

const HelpStackScreen = () => (
  <HelpStack.Navigator screenOptions={headerStyle}>
    <HelpStack.Screen
      name="Help"
      component={HelpScreen}
      options={() => ({ title: 'Помочь' })}
    />
  </HelpStack.Navigator>
);

export { HelpStackScreen };

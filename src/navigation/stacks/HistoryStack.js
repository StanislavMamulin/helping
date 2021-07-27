import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HistoryScreen from '../../screens/HistoryScreen/HistoryScreen';
import { headerStyle } from '../styles';

const HistoryStack = createStackNavigator();

const HistoryStackScreen = () => (
  <HistoryStack.Navigator screenOptions={headerStyle}>
    <HistoryStack.Screen
      name="History"
      component={HistoryScreen}
      options={() => ({ title: 'История' })}
    />
  </HistoryStack.Navigator>
);

export { HistoryStackScreen };

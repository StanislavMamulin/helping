import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SearchScreen } from '../../screens/SearchScreen/SearchScreen';
import { headerStyle } from '../styles';

const SearchStack = createStackNavigator();

const SearchStackScreen = () => (
  <SearchStack.Navigator screenOptions={headerStyle}>
    <SearchStack.Screen
      name="Search"
      component={SearchScreen}
      options={{
        title: 'Поиск',
        headerStyle: {
          ...headerStyle.headerStyle,
          elevation: 0,
          shadowOpacity: 0,
        },
      }}
    />
  </SearchStack.Navigator>
);

export { SearchStackScreen };

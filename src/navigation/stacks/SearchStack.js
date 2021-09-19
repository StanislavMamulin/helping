import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SearchScreen } from '../../screens/SearchScreen/SearchScreen';
import { FilterScreen } from '../../screens/FilterScreen/FilterScreen';
import { SearchEventsResultScreen } from '../../screens/SearchEventsResultScreen/SearchEventsResultScreen';
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
    <SearchStack.Screen
      name="SearchEventsResult"
      component={SearchEventsResultScreen}
      options={{ title: 'События' }}
    />
    <SearchStack.Screen
      name="FilterScreen"
      component={FilterScreen}
      options={() => ({ title: 'Фильтр' })}
    />
  </SearchStack.Navigator>
);

export { SearchStackScreen };

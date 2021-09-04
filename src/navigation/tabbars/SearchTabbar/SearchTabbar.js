import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { SearchEvents } from '../../../components/SearchEvents/SearchEvents';
import { SearchNKO } from '../../../components/SearchNKO/SearchNKO';
import { styles, activeTintColor } from './styles';

const SearchTabs = createMaterialTopTabNavigator();

export const SearchTabbar = () => (
  <SearchTabs.Navigator
    tabBarOptions={{
      labelStyle: { ...styles.tabText, textTransform: 'none' },
      style: styles.tabbar,
      activeTintColor,
      indicatorStyle: styles.indicator,
    }}
  >
    <SearchTabs.Screen
      name="SearchEvents"
      component={SearchEvents}
      options={{ title: 'По мероприятиям' }}
    />
    <SearchTabs.Screen
      name="SearchNKO"
      component={SearchNKO}
      options={{ title: 'По НКО' }}
    />
  </SearchTabs.Navigator>
);

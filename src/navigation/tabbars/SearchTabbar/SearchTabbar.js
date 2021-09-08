import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { SearchEvents } from '../../../components/SearchEvents/SearchEvents';
import { SearchNKO } from '../../../components/SearchNKO/SearchNKO';
import { styles, activeTintColor } from './styles';

import { TYPES_OF_SEARCH } from '../../../dataManager/data/typesOfSearch';

const SearchTabs = createMaterialTopTabNavigator();

export const SearchTabbar = ({ tabChanged }) => (
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
      listeners={{
        focus: () => {
          tabChanged(TYPES_OF_SEARCH.eventsTitle);
        },
      }}
    />
    <SearchTabs.Screen
      name="SearchNKO"
      component={SearchNKO}
      options={{ title: 'По НКО' }}
      listeners={{
        focus: () => {
          tabChanged(TYPES_OF_SEARCH.nkoTitle);
        },
      }}
    />
  </SearchTabs.Navigator>
);
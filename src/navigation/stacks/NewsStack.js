import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import NewsScreen from '../../screens/NewsScreen/NewsScreen';
import FilterScreen from '../../screens/FilterScreen/FilterScreen';
import EventDetailsScreen from '../../screens/EventDetailsScreen/EventDetailsScreen';
import { headerStyle } from '../styles';

const NewsStack = createStackNavigator();

const NewsStackScreen = () => (
  <NewsStack.Navigator screenOptions={headerStyle}>
    <NewsStack.Screen
      name="Events"
      component={NewsScreen}
      options={() => ({ title: 'Новости' })}
    />
    <NewsStack.Screen name="EventDetails" component={EventDetailsScreen} />
    <NewsStack.Screen
      name="FilterScreen"
      component={FilterScreen}
      options={() => ({ title: 'Фильтр' })}
    />
  </NewsStack.Navigator>
);

export { NewsStackScreen };

import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NewsStackScreen } from '../stacks/NewsStack';
import { SearchStackScreen } from '../stacks/SearchStack';
import { HelpStackScreen } from '../stacks/HelpStack';
import { HistoryStackScreen } from '../stacks/HistoryStack';
import { ProfileStackScreen } from '../stacks/ProfileStack';

import HelpIcon from '../../components/HelpIcon/HelpIcon';
import { tabbar } from '../../commonStyles/colors';

const getScreenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color }) => {
    const ICON_SIZE = 40;
    if (route.name === 'Help') {
      return <HelpIcon focused={focused} />;
    }

    return (
      <Image
        source={{ uri: route.name }}
        style={{ width: ICON_SIZE, height: ICON_SIZE, tintColor: color }}
      />
    );
  },
});

const MainTab = createBottomTabNavigator();

const MainTabsScreen = () => (
  <MainTab.Navigator
    screenOptions={getScreenOptions}
    tabBarOptions={{
      activeTintColor: tabbar.activeTintColor,
      inactiveTintColor: tabbar.inactiveTintColor,
    }}
  >
    <MainTab.Screen
      name="News"
      component={NewsStackScreen}
      options={() => ({ title: 'Новости' })}
    />
    <MainTab.Screen
      name="Search"
      component={SearchStackScreen}
      options={() => ({ title: 'Поиск' })}
    />
    <MainTab.Screen
      name="Help"
      component={HelpStackScreen}
      options={() => ({ title: 'Помочь' })}
    />
    <MainTab.Screen
      name="History"
      component={HistoryStackScreen}
      options={() => ({ title: 'История' })}
    />
    <MainTab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={() => ({ title: 'Профиль' })}
    />
  </MainTab.Navigator>
);

export { MainTabsScreen };

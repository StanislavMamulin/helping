import 'react-native-gesture-handler';
import React from 'react';
import { Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import NewsScreen from '../screens/NewsScreen/NewsScreen';
import EventDetailsScreen from '../screens/EventDetailsScreen/EventDetailsScreen';
import SearchScreen from '../screens/SearchScreen/SearchScreen';
import FilterScreen from '../screens/HelpScreen/HelpScreen';
import HistoryScreen from '../screens/HistoryScreen/HistoryScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import ProfileEditScreen from '../screens/ProfileEditScreen/ProfileEditScreen';
import AuthScreen from '../screens/AuthScreen/AuthScreen';

import HelpIcon from '../components/HelpIcon/HelpIcon';
import { tabbar } from '../commonStyles/colors';

const ModalStack = createStackNavigator();
const MainTab = createBottomTabNavigator();
const NewsStack = createStackNavigator();
const SearchStack = createStackNavigator();
const HelpStack = createStackNavigator();
const HistoryStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const headerStyle = {
  headerStyle: {
    backgroundColor: '#66a636',
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    textAlign: 'center',
    fontSize: 21,
    fontFamily: 'OfficinaSansExtraBoldC',
  },
  headerTitleAlign: 'center',
};

const NewsStackScreen = () => (
  <NewsStack.Navigator screenOptions={headerStyle}>
    <NewsStack.Screen
      name="Events"
      component={NewsScreen}
      options={() => ({ title: 'Новости' })}
    />
    <NewsStack.Screen name="EventDetails" component={EventDetailsScreen} />
    <NewsStack.Screen name="FilterScreen" component={FilterScreen} />
  </NewsStack.Navigator>
);

const SearchStackScreen = () => (
  <SearchStack.Navigator screenOptions={headerStyle}>
    <SearchStack.Screen
      name="Search"
      component={SearchScreen}
      options={() => ({ title: 'Поиск' })}
    />
  </SearchStack.Navigator>
);

const HelpStackScreen = () => (
  <HelpStack.Navigator screenOptions={headerStyle}>
    <HelpStack.Screen
      name="Help"
      component={FilterScreen}
      options={() => ({ title: 'Помочь' })}
    />
  </HelpStack.Navigator>
);

const HistoryStackScreen = () => (
  <HistoryStack.Navigator screenOptions={headerStyle}>
    <HistoryStack.Screen
      name="History"
      component={HistoryScreen}
      options={() => ({ title: 'История' })}
    />
  </HistoryStack.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator screenOptions={headerStyle}>
    <ProfileStack.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={() => ({ title: 'Профиль' })}
    />
    <ProfileStack.Screen
      name="ProfileEdit"
      component={ProfileEditScreen}
      options={() => ({ title: 'Редактировать' })}
    />
  </ProfileStack.Navigator>
);

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

const MainScreen = () => (
  <NavigationContainer>
    <ModalStack.Navigator mode="modal" headerMode="none">
      <ModalStack.Screen name="Main" component={MainTabsScreen} />
      <ModalStack.Screen name="Auth" component={AuthScreen} />
    </ModalStack.Navigator>
  </NavigationContainer>
);

export { MainScreen };

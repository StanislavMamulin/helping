import 'react-native-gesture-handler';
import React from 'react';
import { useColorScheme, StatusBar } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { MainScreen } from './src/navigation/Navigation';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <MainScreen />
    </SafeAreaProvider>
  );
};

export default App;

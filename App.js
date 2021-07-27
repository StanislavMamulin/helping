import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { useColorScheme, StatusBar } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { MainScreen } from './src/navigation/Navigation';
import { LoadingScreen } from './src/screens/LoadingScreen/LoadingScreen';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const isDarkMode = useColorScheme() === 'dark';

  const initApp = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    initApp();
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {isLoading ? <LoadingScreen /> : <MainScreen />}
    </SafeAreaProvider>
  );
};

export default App;

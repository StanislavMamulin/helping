import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { useColorScheme, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';

import { checkUserAuth } from './src/redux/userSlice';

import { MainScreen } from './src/navigation/Navigation';
import { LoadingScreen } from './src/screens/LoadingScreen/LoadingScreen';
import { HelpProcessingModals } from './src/screens/HelpProcessingModals/HelpProcessingModals';

const App = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const isDarkMode = useColorScheme() === 'dark';

  const initApp = async () => {
    try {
      dispatch(checkUserAuth());
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    initApp();
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {isLoading ? <LoadingScreen /> : <MainScreen />}
      <HelpProcessingModals />
    </SafeAreaProvider>
  );
};

export default App;

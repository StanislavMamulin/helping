import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { EmptyHistory } from '../../components/EmptyHistory/EmptyHistory';
import { HistoryList } from '../../components/HistoryList/HistoryList';

import styles from './styles';

export const HistoryScreen = () => {
  const [helpingHistory, setHelpingHistory] = useState([]);

  useEffect(() => {
    // getHistory
  }, []);

  return (
    <View style={styles.container}>
      {helpingHistory.length === 0 ? <EmptyHistory /> : <HistoryList />}
    </View>
  );
};

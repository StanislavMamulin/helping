import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { EmptyHistory } from '../../components/EmptyHistory/EmptyHistory';
import { RequestsHistoryList } from '../../components/RequestsHistoryList/RequestsHistoryList';

import styles from './styles';

export const HistoryScreen = () => {
  const [helpingHistory, setHelpingHistory] = useState([]);

  useEffect(() => {
    // get/set request history
  }, []);

  return (
    <View style={styles.container}>
      {helpingHistory.length === 0 ? (
        <EmptyHistory />
      ) : (
        <RequestsHistoryList historyEvents={helpingHistory} />
      )}
    </View>
  );
};

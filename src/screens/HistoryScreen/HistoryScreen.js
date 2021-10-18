import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import { EmptyHistory } from '../../components/EmptyHistory/EmptyHistory';
import { RequestsHistoryList } from '../../components/RequestsHistoryList/RequestsHistoryList';
import { getHelpsForUser } from '../../dataManager/firebase/firebase';

import styles from './styles';

export const HistoryScreen = () => {
  const [helpingHistory, setHelpingHistory] = useState([]);
  const { uid } = useSelector(state => state.user.user);

  useEffect(() => {
    const helpsGet = async () => {
      const helps = await getHelpsForUser(uid);
      setHelpingHistory(helps);
    };

    helpsGet();
  }, [uid]);

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

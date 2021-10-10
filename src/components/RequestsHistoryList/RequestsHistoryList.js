import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

import { HistoryItemCard } from './HistoryItemCard/HistoryItemCard';
import { RequestsListSeparator } from './RequestsListSeparator/RequestsListSeparator';

import { styles } from './styles';

export const RequestsHistoryList = ({
  historyEvents = [],
  onEndReached = () => {},
}) => {
  const handleReportPress = useCallback(() => {

  }, []);

  return (
    <FlatList
      data={historyEvents}
      renderItem={({ item }) => (
        <HistoryItemCard event={item} onPress={handleReportPress} />
      )}
      ItemSeparatorComponent={RequestsListSeparator}
      onEndReached={onEndReached}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

RequestsHistoryList.propTypes = {
  historyEvents: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.objectOf(PropTypes.number).isRequired,
      typeOfHelp: PropTypes.string.isRequired,
      donationAmount: PropTypes.number,
    }),
  ),
  onEndReached: PropTypes.func,
};

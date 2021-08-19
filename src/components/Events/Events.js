import React from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import { renderEvent } from './renderEvent';
import { EventsFooter } from './EventsFooter/EventsFooter';

export const Events = ({ events, getNextPart, isLoadingMore }) => (
  <View>
    <FlatList
      data={events}
      renderItem={renderEvent}
      keyExtractor={event => event.id}
      onEndReached={getNextPart}
      onEndReachedThreshold={0.9}
      ListFooterComponent={<EventsFooter isLoadingMore={isLoadingMore} />}
    />
  </View>
);

Events.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      titlePhoto: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      date: PropTypes.shape({
        from: PropTypes.number.isRequired,
        to: PropTypes.number.isRequired,
      }),
    }),
  ).isRequired,
  getNextPart: PropTypes.func.isRequired,
  isLoadingMore: PropTypes.bool.isRequired,
};

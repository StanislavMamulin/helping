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
      ListFooterComponent={<EventsFooter isLoadingMore={isLoadingMore} />}
    />
  </View>
);

Events.propTypes = {
  events: PropTypes.array.isRequired,
  getNextPart: PropTypes.func.isRequired,
  isLoadingMore: PropTypes.bool.isRequired,
};

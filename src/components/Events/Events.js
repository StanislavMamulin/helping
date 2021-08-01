import React from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import { EventCard } from '../EventCard/EventCard';
import { styles } from './styles';
import { Loader } from '../Loader/Loader';

const renderEvent = ({ item }) => {
  const { photo, title, description, date } = item;
  return (
    <EventCard
      photo={photo}
      title={title}
      description={description}
      date={date}
    />
  );
};

export const Events = ({ events, getNextPart, loadingMore }) => {
  const FooterComponent = () => (
    <View style={styles.bottomOffset}>
      {loadingMore ? <Loader /> : <View />}
    </View>
  );

  return (
    <View>
      <FlatList
        data={events}
        renderItem={renderEvent}
        keyExtractor={event => event.id}
        onEndReached={getNextPart}
        ListFooterComponent={FooterComponent}
      />
    </View>
  );
};

Events.propTypes = {
  events: PropTypes.array.isRequired,
  getNextPart: PropTypes.func.isRequired,
  loadingMore: PropTypes.bool.isRequired,
};

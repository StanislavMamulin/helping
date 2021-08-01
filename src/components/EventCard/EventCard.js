import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { EventCardDescription } from './EventCardDescription/EventCardDescription';
import { EventCardDate } from './EventCardDate/EventCardDate';
import { styles } from './styles';

export const EventCard = props => {
  const { photo, title, description, date } = props;

  return (
    <View style={styles.container}>
      <EventCardDescription
        photo={photo}
        title={title}
        description={description}
      />
      <EventCardDate date={date} />
    </View>
  );
};

EventCard.propTypes = {
  photo: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.shape({
    from: PropTypes.number.isRequired,
    to: PropTypes.number.isRequired,
  }).isRequired,
};

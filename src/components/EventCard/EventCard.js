import React, { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';

import { EventCardDescription } from './EventCardDescription/EventCardDescription';
import { EventCardDate } from './EventCardDate/EventCardDate';
import { styles } from './styles';

export const EventCard = ({
  titlePhoto = '',
  title,
  description,
  date,
  details,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate({
          name: 'EventDetails',
          params: {
            title,
            description,
            date,
            titlePhoto,
            details,
          },
        })
      }
    >
      <EventCardDescription
        photo={{ uri: titlePhoto }}
        title={title}
        description={description}
      />
      <EventCardDate date={date} />
    </TouchableOpacity>
  );
};

EventCard.propTypes = {
  titlePhoto: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.shape({
    from: PropTypes.number.isRequired,
    to: PropTypes.number.isRequired,
  }).isRequired,
};

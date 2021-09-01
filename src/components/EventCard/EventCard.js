import React, { useCallback } from 'react';
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

  const goToDetails = useCallback(
    () =>
      navigation.navigate({
        name: 'EventDetails',
        params: {
          titlePhoto,
          title,
          description,
          date,
          details,
        },
      }),
    [navigation, titlePhoto, title, description, date, details],
  );

  return (
    <TouchableOpacity style={styles.container} onPress={goToDetails}>
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

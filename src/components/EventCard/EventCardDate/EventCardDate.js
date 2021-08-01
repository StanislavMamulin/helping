import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

import { format } from 'date-fns';
import formatDistance from 'date-fns/formatDistance';
import { ru } from 'date-fns/locale';

import { capitalize } from '../../../utils/text';

import { styles } from './styles';

const getDateText = date => {
  const { from, to } = date;

  // конкретная дата
  if (from === to) {
    const formattedDate = format(from, 'LLLL dd, yyyy', { locale: ru });
    return capitalize(formattedDate);
  }

  // период
  const daysLeft = formatDistance(from, to, { locale: ru });
  const dayAndMonth1 = format(from, 'dd.MM');
  const dayAndMonth2 = format(to, 'dd.MM');

  return `Осталось: ${daysLeft} (${dayAndMonth1} - ${dayAndMonth2})`;
};

export const EventCardDate = ({ date }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'icon_calendar' }} style={styles.icon} />
      <Text style={styles.text}>{getDateText(date)}</Text>
    </View>
  );
};

EventCardDate.propTypes = {
  date: PropTypes.shape({
    from: PropTypes.number.isRequired,
    to: PropTypes.number.isRequired,
  }).isRequired,
};

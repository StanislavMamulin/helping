import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import { EventCardDate } from '../../EventCard/EventCardDate/EventCardDate';
import { ButtonThemed } from '../../ButtonThemed/ButtonThemed';

import { styles, dateTheme } from './styles';

const getHelpProvidedText = (helpProvided, donation) =>
  donation > 0 ? `Помощь деньгами: ${donation} ₽` : helpProvided;

export const HistoryItemCard = ({
  event: { title = '', date = {}, typeOfHelp = '', donationAmount = 0 },
  onPress = () => {},
}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <EventCardDate date={date} theme={dateTheme} />
    <Text style={styles.helpProvided}>
      {getHelpProvidedText(typeOfHelp, donationAmount)}
    </Text>
    {donationAmount > 0 && (
      <ButtonThemed
        text="Скачать отчет"
        onPress={onPress}
        styleButton={styles.button}
      />
    )}
  </View>
);

HistoryItemCard.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.objectOf(PropTypes.number).isRequired,
    typeOfHelp: PropTypes.string.isRequired,
    donationAmount: PropTypes.number,
  }).isRequired,
  onPress: PropTypes.func,
};

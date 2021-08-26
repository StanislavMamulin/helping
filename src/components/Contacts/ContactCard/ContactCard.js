import React from 'react';
import { View, Image, Text, Linking } from 'react-native';
import PropTypes from 'prop-types';

import { typeToIconMap } from './dataMapping';
import styles from './styles';

const renderTextByType = (type, value) => {
  switch (type) {
    case 'email':
      return (
        <Text style={styles.contactText}>
          У вас есть вопросы?{' '}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL(`mailto:${value}`)}
          >
            Напишите нам
          </Text>
        </Text>
      );
    default:
      return <Text style={styles.contactText}>{value}</Text>;
  }
};

export const ContactCard = ({ type = '', value = '' }) => (
  <View style={styles.container}>
    <Image source={{ uri: typeToIconMap[type] }} style={styles.icon} />
    {renderTextByType(type, value)}
  </View>
);

ContactCard.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

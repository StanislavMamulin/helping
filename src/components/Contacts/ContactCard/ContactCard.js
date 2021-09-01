import React from 'react';
import { View, Image, Text, Linking } from 'react-native';
import PropTypes from 'prop-types';

import { typeToIconMap } from './dataMapping';
import styles from './styles';

export const ContactCard = ({ type = '', value = '' }) => {
  const hasEmail = type === 'email';
  const contactText = hasEmail ? 'У вас есть вопросы? ' : value;

  return (
    <View style={styles.container}>
      <Image source={{ uri: typeToIconMap[type] }} style={styles.icon} />
      <Text style={styles.contactText}>
        {contactText}
        {hasEmail && (
          <Text
            style={styles.link}
            onPress={() => Linking.openURL(`mailto:${value}`)}
          >
            Напишите нам
          </Text>
        )}
      </Text>
    </View>
  );
};

ContactCard.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

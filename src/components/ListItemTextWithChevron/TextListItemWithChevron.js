import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

export const ListItemTextWithChevron = ({ text, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={() => onPress(text)}>
    <Text numberOfLines={1} style={styles.text}>
      {text}
    </Text>
    <Image source={{ uri: 'icon_chevron_right' }} style={styles.chevronIcon} />
  </TouchableOpacity>
);

ListItemTextWithChevron.propTypes = {
  text: PropTypes.string.isRequired,
};

import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

export const ItemPhotoAndText = ({ imageURL = '', text = '', onPress }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={onPress}
    disabled={!onPress}
  >
    <Image source={{ uri: imageURL }} style={styles.image} />
    <Text numberOfLines={1} style={styles.text}>
      {text}
    </Text>
  </TouchableOpacity>
);

ItemPhotoAndText.propTypes = {
  imageURL: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

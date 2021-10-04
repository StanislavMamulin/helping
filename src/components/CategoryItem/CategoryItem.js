import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

export const CategoryItem = ({
  imageURL = '',
  title = '',
  size: { width, aspectRatio } = {},
}) => (
  <TouchableOpacity style={[styles.container, { width, aspectRatio }]}>
    <View style={styles.imageContainer}>
      <Image
        source={{ uri: imageURL }}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

CategoryItem.propTypes = {
  imageURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

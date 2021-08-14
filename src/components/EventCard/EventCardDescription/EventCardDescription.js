import React from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

export const EventCardDescription = ({
  photo = { uri: '' },
  title = 'Событие загружается',
  description = 'Событие загружается',
}) => (
  <View>
    <View style={styles.photoPart}>
      <ImageBackground
        source={photo}
        style={styles.photoWrapper}
        imageStyle={styles.photo}
      >
        <Image source={{ uri: 'fade' }} style={styles.fade} />
      </ImageBackground>
    </View>
    <View style={styles.textPart}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.decorWrapper}>
        <Image source={{ uri: 'decor' }} style={styles.decor} />
      </View>
      <Text numberOfLines={3} style={styles.description}>
        {description}
      </Text>
    </View>
  </View>
);

EventCardDescription.propTypes = {
  photo: PropTypes.shape({
    uri: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

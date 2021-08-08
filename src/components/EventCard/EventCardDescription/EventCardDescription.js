import React from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

export const EventCardDescription = ({ photo, title, description }) => (
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
  photo: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

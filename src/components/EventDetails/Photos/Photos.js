import React from 'react';
import { Image, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

export const Photos = ({ photos: { titlePhoto = '', eventPhotos = [] } }) => (
  <View style={styles.container}>
    <Image source={{ uri: titlePhoto }} style={styles.titlePhoto} />
    <View style={styles.eventPhotos}>
      {eventPhotos.map((photoURL, index) => {
        const additionalMargin = index === 0 ? { marginBottom: 10 } : {};
        return (
          <Image
            key={photoURL}
            source={{ uri: photoURL }}
            style={[styles.eventPhoto, additionalMargin]}
          />
        );
      })}
    </View>
  </View>
);

Photos.propTypes = {
  titlePhoto: PropTypes.string.isRequired,
  eventPhotos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

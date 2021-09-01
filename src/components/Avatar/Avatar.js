import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './style';

export const Avatar = ({ imageSource = '', size = 0, borderStyle = {} }) => (
  <Image
    source={{ uri: imageSource }}
    style={styles(size, borderStyle).avatar}
  />
);

Avatar.propTypes = {
  imageSource: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  borderStyle: PropTypes.object.isRequired,
};

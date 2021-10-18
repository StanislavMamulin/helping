import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

export const UserAvatar = ({ avatarURL = 'user_icon' }) => (
  <Image
    source={{ uri: avatarURL }}
    resizeMode="contain"
    style={styles.avatar}
  />
);

UserAvatar.propTypes = {
  avatarURL: PropTypes.string,
};

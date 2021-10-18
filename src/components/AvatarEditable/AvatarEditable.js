import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import { styles, avatarStyle } from './style';

export const AvatarEditable = ({
  imageSource = 'user_icon',
  size = 0,
  onPress = () => {},
}) => (
  <TouchableOpacity onPress={onPress} style={avatarStyle(size).container}>
    <ImageBackground
      source={{ uri: imageSource }}
      style={avatarStyle(size).avatar}
      resizeMode="contain"
    >
      <View style={styles.textUnderlay}>
        <Text style={styles.text}>{`Сменить\nфото`}</Text>
      </View>
    </ImageBackground>
  </TouchableOpacity>
);

AvatarEditable.propTypes = {
  imageSource: PropTypes.string,
  size: PropTypes.number.isRequired,
  borderStyle: PropTypes.object,
};

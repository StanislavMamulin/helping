import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export const HelpIcon = ({ focused = false }) => (
  <View style={styles().helpIconOutter}>
    <Image source={{ uri: 'shadow' }} style={styles().helpIconShadow} />
    <View style={styles(focused).helpIconInner}>
      <Image source={{ uri: 'heart' }} style={styles(focused).helpIcon} />
    </View>
  </View>
);

HelpIcon.propTypes = {
  focused: PropTypes.bool.isRequired,
};

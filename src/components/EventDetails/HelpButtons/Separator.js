import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

export const Separator = () => (
  <LinearGradient
    style={styles.separator}
    colors={['#fffffd', '#aaaaaa', '#fffffd']}
    locations={[0.1, 0.5, 0.9]}
  />
);

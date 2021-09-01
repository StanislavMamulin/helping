import { StyleSheet } from 'react-native';

export const styles = (size, borderStyle) =>
  StyleSheet.create({
    avatar: {
      height: size,
      width: size,

      borderRadius: size / 2,
      ...borderStyle,
    },
  });

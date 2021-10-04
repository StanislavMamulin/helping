import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { SocialAuthButton } from '../../../components/SocialAuthButton/SocialAuthButton';
import { styles } from './styles';

export const AuthButtonsList = ({ onPress = () => {}, layoutStyle = {} }) => {
  return (
    <View style={[styles.container, layoutStyle]}>
      <SocialAuthButton type="vk" onPress={onPress} extStyle={styles.buttons} />
      <SocialAuthButton type="fb" onPress={onPress} extStyle={styles.buttons} />
      <SocialAuthButton type="ok" onPress={onPress} />
    </View>
  );
};

AuthButtonsList.propTypes = {
  onPress: PropTypes.func.isRequired,
  layoutStyle: PropTypes.object,
};

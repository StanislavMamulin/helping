import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { ButtonStrip } from '../ButtonStrip/ButtonStrip';

import { styles } from './styles';

export const SuccessHelpNotification = ({ onActionPress }) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      Спасибо за помощь! Ваши контактные данные успешно отправлены.
    </Text>
    <ButtonStrip actionText="OK" cancelText="" onActionPress={onActionPress} />
  </View>
);

SuccessHelpNotification.propTypes = {
  onActionPress: PropTypes.func.isRequired,
};

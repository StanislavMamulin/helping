import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

export const ButtonStrip = ({
  actionText = '',
  cancelText = 'ОТМЕНА',
  onCancelPress = () => {},
  onActionPress = () => {},
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onCancelPress}>
        <Text style={styles.buttonText}>{cancelText}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onActionPress}>
        <Text style={styles.buttonText}>{actionText}</Text>
      </TouchableOpacity>
    </View>
  );
};

ButtonStrip.propTypes = {
  actionText: PropTypes.string.isRequired,
  cancelText: PropTypes.string,
  onCancelPress: PropTypes.func.isRequired,
  onActionPress: PropTypes.func.isRequired,
};

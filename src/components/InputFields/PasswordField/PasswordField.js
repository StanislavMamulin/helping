import React, { useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import { InputField } from '../InputField/InputField';

import { styles } from './styles';

const bottomBorderStyle = active =>
  active ? styles.textInputFocused : styles.textInputBlurred;

export const PasswordField = ({
  value = '',
  onChangeText = () => {},
  style = {},
}) => {
  const [isHidePassword, setIsHidePassword] = useState(true);
  const [isActive, setIsActive] = useState(false);

  return (
    <View style={[styles.container, bottomBorderStyle(isActive), style]}>
      <View style={styles.input}>
        <InputField
          title="Пароль"
          placeholder="Введите пароль"
          secureTextEntry={isHidePassword}
          value={value}
          onChangeText={onChangeText}
          multiline={false}
          style={{ borderBottomWidth: 0 }}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
        />
      </View>
      <View style={styles.showHideContainer}>
        <TouchableOpacity
          style={styles.show}
          onPress={() => setIsHidePassword(false)}
        >
          <Image source={{ uri: 'open' }} style={styles.icons} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.hide}
          onPress={() => setIsHidePassword(true)}
        >
          <Image source={{ uri: 'close' }} style={styles.icons} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

PasswordField.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  style: PropTypes.object,
};

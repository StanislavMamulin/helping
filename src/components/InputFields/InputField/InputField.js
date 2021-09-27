import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

const bottomBorderStyle = active =>
  active ? styles.textInputFocused : styles.textInputBlurred;

export const InputField = ({
  title = '',
  extStyle = {},
  onBlur = () => {},
  onFocus = () => {},
  ...props
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <View style={[styles.container, extStyle.container]}>
      <Text style={[styles.title, extStyle.title]}>{title}</Text>
      <TextInput
        {...props}
        style={[
          styles.textInput,
          bottomBorderStyle(isActive),
          extStyle.textInput,
        ]}
        onFocus={() => {
          onFocus();
          setIsActive(true);
        }}
        onBlur={() => {
          onBlur();
          setIsActive(false);
        }}
      />
    </View>
  );
};

InputField.propTypes = {
  title: PropTypes.string.isRequired,
  extStyle: PropTypes.object,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
};

import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

export const ButtonThemed = ({ styleButton = {}, styleText = {} }) => {
  return (
    <TouchableOpacity style={[styles.button, styleButton]}>
      <Text style={[styles.text, styleText]}>ВОЙТИ</Text>
    </TouchableOpacity>
  );
};

ButtonThemed.propTypes = {
  
};

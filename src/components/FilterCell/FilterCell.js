import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { SwitchStyled } from '../SwitchStyled/SwitchStyled';
import styles from './styles';

export const FilterCell = ({ title, isEnabled, onChange }) => (
  <View style={styles.container}>
    <Text style={styles.typeOfHelp}>{title}</Text>
    <SwitchStyled isEnabled={isEnabled} onChange={onChange} />
  </View>
);

FilterCell.propTypes = {
  title: PropTypes.string.isRequired,
  isEnabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

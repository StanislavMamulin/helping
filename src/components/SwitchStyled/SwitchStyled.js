import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-native';
import { switchColors } from '../../commonStyles/colors';

export const SwitchStyled = ({ isEnabled, onChange }) => (
  <Switch
    thumbColor={isEnabled ? switchColors.thumbOn : switchColors.thumbOff}
    trackColor={{ true: switchColors.trackOn, false: switchColors.trackOff }}
    value={isEnabled}
    onValueChange={value => {
      onChange(value);
    }}
  />
);

SwitchStyled.propTypes = {
  isEnabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';

import { buttonsStyles } from '../../commonStyles/buttons';

const TOUCH_AREA = { top: 20, bottom: 20, left: 20, right: 20 };

export const HeaderRightButton = ({ type, onPress }) => (
  <TouchableOpacity hitSlop={TOUCH_AREA} onPress={onPress}>
    <Image source={{ uri: type }} style={buttonsStyles.headerRight} />
  </TouchableOpacity>
);

HeaderRightButton.propTypes = {
  type: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

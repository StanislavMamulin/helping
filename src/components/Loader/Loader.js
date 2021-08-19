import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { colors } from '../../commonStyles/colors';

export const Loader = ({ animating = true }) => (
  <ActivityIndicator
    animating={animating}
    color={colors.TURTLE_GREEN}
    size="large"
  />
);

Loader.propTypes = {
  animating: PropTypes.bool,
};

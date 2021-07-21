import React from 'react';
import { ActivityIndicator } from 'react-native';

import PropTypes from 'prop-types';

const Loader = ({ animating }) => (
  <ActivityIndicator animating={animating} color="#7db354" size="large" />
);

Loader.propTypes = {
  animating: PropTypes.bool.isRequired,
};

export default Loader;

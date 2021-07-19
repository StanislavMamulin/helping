import React from 'react';
import { ActivityIndicator } from 'react-native';

const Loader = ({ animating }) => (
  <ActivityIndicator animating={animating} color="#7db354" size="large" />
);

export default Loader;

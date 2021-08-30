import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { HelpButton } from './HelpButton/HelpButton';
import { Separator } from './Separator';
import styles from './styles';

export const HelpButtons = ({ typesOfHelp = [] }) => (
  <View style={styles.container}>
    {typesOfHelp.map((type, index) => (
      <View key={type} style={styles.buttonContainer}>
        <HelpButton type={type} />
        {index < typesOfHelp.length - 1 ? <Separator /> : null}
      </View>
    ))}
  </View>
);

HelpButtons.propTypes = {
  typesOfHelp: PropTypes.arrayOf(PropTypes.string).isRequired,
};

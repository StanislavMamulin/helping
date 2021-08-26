import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { Separator } from './Separator';
import { typesToIconMap, typesToLabelMap } from './dataMapping';
import styles from './styles';

const renderButtons = typesOfHelp =>
  typesOfHelp.map((type, index) => (
    <View key={type} style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}>
        <Image source={{ uri: typesToIconMap[type] }} style={styles.icon} />
        <Text style={styles.label}>{typesToLabelMap[type]}</Text>
      </TouchableOpacity>
      {index < typesOfHelp.length - 1 ? <Separator /> : null}
    </View>
  ));

export const HelpButtons = ({ typesOfHelp = [] }) => (
  <View style={styles.container}>{renderButtons(typesOfHelp)}</View>
);

HelpButtons.propTypes = {
  typesOfHelp: PropTypes.arrayOf(PropTypes.string).isRequired,
};

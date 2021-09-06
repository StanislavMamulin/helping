import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

export const BlankSearch = ({
  firstHint = '',
  secondHint = '',
  onExamplePress = () => {},
}) => (
  <View style={styles.container}>
    <Image source={{ uri: 'icon_zoom' }} style={styles.image} />
    <Text style={styles.firstHint}>{firstHint}</Text>
    <View style={styles.secondHintContainer}>
      <Text style={styles.secondHint}>{'Например, '}</Text>
      <TouchableOpacity onPress={onExamplePress}>
        <Text style={styles.link}>{secondHint}</Text>
      </TouchableOpacity>
    </View>
  </View>
);

BlankSearch.propTypes = {
  firstHint: PropTypes.string.isRequired,
  secondHint: PropTypes.string.isRequired,
  onExamplePress: PropTypes.func.isRequired,
};

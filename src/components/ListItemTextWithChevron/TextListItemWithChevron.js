import React from 'react';
import { Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

export const ListItemTextWithChevron = ({ item }) => (
  <View style={styles.container}>
    <Text numberOfLines={1} style={styles.text}>
      {item}
    </Text>
    <Image source={{ uri: 'icon_chevron_right' }} style={styles.chevronIcon} />
  </View>
);

ListItemTextWithChevron.propTypes = {
  item: PropTypes.string.isRequired,
};

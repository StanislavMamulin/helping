import React from 'react';
import { Image, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

export const HeaderWithSearchField = ({
  placeholder = '',
  onChangeText = () => {},
  searchText = '',
}) => (
  <View style={styles.container}>
    <Image source={{ uri: 'find' }} style={styles.icons} />
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={styles.placeholderText}
      value={searchText}
      onChangeText={onChangeText}
      returnKeyType="search"
      style={[styles.searchText, styles.searchField]}
      autoFocus
    />
    <Image source={{ uri: 'mic' }} style={styles.icons} />
  </View>
);

HeaderWithSearchField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};

import React, { useCallback, useLayoutEffect, useState } from 'react';
import { View, Text } from 'react-native';

import PropTypes from 'prop-types';

import { SearchTabbar } from '../../navigation/tabbars/SearchTabbar/SearchTabbar';
import { HeaderRightButton } from '../../components/HeaderRightButton/HeaderRightButton';
import { HeaderWithSearchField } from '../../components/HeaderWithSearchField/HeaderWithSearchField';

import { getPlaceholderByType } from './data';
import styles from './styles';

export const SearchScreen = ({ navigation }) => {
  const [showSearchField, setShowSearchField] = useState(false);
  const [activeSearchType, setActiveSearchType] = useState('eventTitle');
  const [searchText, setSearchText] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () =>
        !showSearchField && (
          <HeaderRightButton
            type="find"
            onPress={() => {
              setShowSearchField(true);
            }}
          />
        ),
      headerTitle: () =>
        showSearchField ? (
          <HeaderWithSearchField
            placeholder={getPlaceholderByType(activeSearchType)}
            onChangeText={text => setSearchText(text)}
            searchText={searchText}
          />
        ) : (
          <Text style={styles.headerTitle}>Поиск</Text>
        ),
    });
  }, [navigation, searchText, activeSearchType, showSearchField]);

  return (
    <View style={styles.container}>
      <SearchTabbar />
    </View>
  );
};

SearchScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

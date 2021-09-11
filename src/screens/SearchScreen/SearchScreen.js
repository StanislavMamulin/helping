import React, { useCallback, useLayoutEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import PropTypes from 'prop-types';

import { SearchTabbar } from '../../navigation/tabbars/SearchTabbar/SearchTabbar';
import { HeaderRightButton } from '../../components/HeaderRightButton/HeaderRightButton';
import { HeaderWithSearchField } from '../../components/HeaderWithSearchField/HeaderWithSearchField';

import { getPlaceholderByType } from './data';
import { TYPES_OF_SEARCH } from '../../dataManager/data/typesOfSearch';
import { resetSearch } from '../../dataManager/searchManager';
import styles from './styles';

export const SearchScreen = ({ navigation }) => {
  const [showSearchField, setShowSearchField] = useState(false);
  const [activeSearchType, setActiveSearchType] = useState(
    TYPES_OF_SEARCH.eventsTitle,
  );
  const [searchText, setSearchText] = useState('');

  const onSearchPressed = useCallback(
    ({ nativeEvent: { text } }) => {
      navigation.navigate({
        name: 'SearchEventsResults',
        params: { title: text },
      });
    },
    [navigation],
  );

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
            onSearchPressed={onSearchPressed}
          />
        ) : (
          <Text style={styles.headerTitle}>Поиск</Text>
        ),
    });
  }, [
    navigation,
    searchText,
    activeSearchType,
    showSearchField,
    onSearchPressed,
  ]);

  // Reset search when returning from a search results page
  useFocusEffect(
    useCallback(() => {
      return () => {
        setSearchText('');
        resetSearch();
      };
    }, []),
  );

  const tabChanged = useCallback(type => {
    setActiveSearchType(type);
  }, []);

  return (
    <View style={styles.container}>
      <SearchTabbar tabChanged={tabChanged} />
    </View>
  );
};

SearchScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

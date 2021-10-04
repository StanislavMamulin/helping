import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import PropTypes from 'prop-types';

import { BlankSearch } from '../BlankSearch/BlankSearch';
import { styles } from './styles';

import { firstHint, secondHint } from './data';
import { SearchNKOResults } from '../SearchNKOResults/SearchNKOResults';
import { findNKOByTitle } from '../../dataManager/searchManager';
import { Loader } from '../Loader/Loader';

export const SearchNKO = ({ onExamplePress, searchTextNKO }) => {
  const [findedNKO, setFindedNKO] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const searchNKOByTitle = async () => {
      const nko = await findNKOByTitle(searchTextNKO);
      setIsSearching(false);
      setFindedNKO(nko);
    };

    if (searchTextNKO) {
      setIsSearching(true);
      searchNKOByTitle();
    } else {
      setFindedNKO([]);
    }
  }, [searchTextNKO]);

  useFocusEffect(
    useCallback(() => {
      return () => {
        if (searchTextNKO === '') {
          setFindedNKO([]);
        }
      };
    }, [searchTextNKO]),
  );

  if (isSearching) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      {findedNKO.length ? (
        <SearchNKOResults findedNKO={findedNKO} keyWords={searchTextNKO} />
      ) : (
        <BlankSearch
          firstHint={firstHint}
          secondHint={secondHint}
          onExamplePress={onExamplePress}
        />
      )}
    </View>
  );
};

SearchNKO.propTypes = {
  onExamplePress: PropTypes.func.isRequired,
  searchTextNKO: PropTypes.string.isRequired,
};

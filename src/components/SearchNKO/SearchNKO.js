import React, { useState } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { BlankSearch } from '../BlankSearch/BlankSearch';
import { styles } from './styles';

import { firstHint, secondHint } from './data';
import { SearchNKOResults } from '../SearchNKOResults/SearchNKOResults';

export const SearchNKO = ({ onExamplePress, searchTextNKO }) => {
  const [findedNKO, setFindedNKO] = useState([]);

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

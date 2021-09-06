import React, { useState } from 'react';
import { View } from 'react-native';

import { BlankSearch } from '../BlankSearch/BlankSearch';
import { styles } from './styles';

import { firstHint, secondHint } from './data';

export const SearchNKO = () => {
  const [findedNKO, setFindedNKO] = useState([]);

  return (
    <View style={styles.container}>
      {findedNKO.length ? (
        <View />
      ) : (
        <BlankSearch firstHint={firstHint} secondHint={secondHint} />
      )}
    </View>
  );
};

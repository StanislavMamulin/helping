import React, { useState } from 'react';
import { View } from 'react-native';

import { BlankSearch } from '../BlankSearch/BlankSearch';
import { styles } from './styles';

import { firstHint, secondHint } from './data';

export const SearchEvents = () => {
  const [findedEvents, setFindedEvents] = useState([]);

  return (
    <View style={styles.container}>
      {findedEvents.length ? (
        <View />
      ) : (
        <BlankSearch firstHint={firstHint} secondHint={secondHint} />
      )}
    </View>
  );
};

import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { BlankSearch } from '../BlankSearch/BlankSearch';
import { styles } from './styles';

import { firstHint, secondHint } from './data';

export const SearchNKO = ({ navigation }) => {
  const [findedNKO, setFindedNKO] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', e => {
      
    });

    return unsubscribe;
  });

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

SearchNKO.propTypes = {
  navigation: PropTypes.object.isRequired,
};

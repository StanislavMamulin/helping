import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { BlankSearch } from '../BlankSearch/BlankSearch';
import { styles } from './styles';

import { firstHint, secondHint } from './data';

export const SearchEvents = ({ navigation }) => {
  const [findedEvents, setFindedEvents] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', e => {

    });

    return unsubscribe;
  });

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

SearchEvents.propTypes = {
  navigation: PropTypes.object.isRequired,
};

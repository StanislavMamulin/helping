import React, { useState } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { BlankSearch } from '../BlankSearch/BlankSearch';
import { styles } from './styles';

import { firstHint, secondHint } from './data';

export const SearchEvents = ({ onExamplePress }) => {
  const [findedEvents, setFindedEvents] = useState([]);

  return (
    <View style={styles.container}>
      {findedEvents.length ? (
        <View />
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

SearchEvents.propTypes = {
  onExamplePress: PropTypes.func.isRequired,
};

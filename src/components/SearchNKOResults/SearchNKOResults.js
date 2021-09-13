import React from 'react';
import { View, Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import { ItemSeparator } from '../ItemSeparator/ItemSeparator';
import { ListItemTextWithChevron } from '../ListItemTextWithChevron/TextListItemWithChevron';
import { Footer } from './Footer';

import { styles } from './styles';

export const SearchNKOResults = ({ findedNKO = [], keyWords = '' }) => (
  <View style={styles.container}>
    <View style={styles.headerTextContainer}>
      <Text style={styles.text}>{`Ключевые слова: ${keyWords}`}</Text>
      <Text style={styles.text}>
        {`Результаты поиска: ${findedNKO.length} организаций`}
      </Text>
    </View>
    <FlatList
      data={findedNKO}
      renderItem={ListItemTextWithChevron}
      style={styles.list}
      keyExtractor={item => item}
      ItemSeparatorComponent={ItemSeparator}
      ListFooterComponent={Footer}
    />
  </View>
);

SearchNKOResults.propTypes = {
  findedNKO: PropTypes.arrayOf(PropTypes.string).isRequired,
  keyWords: PropTypes.string.isRequired,
};

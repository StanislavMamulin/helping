import React, { useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';

import { ItemSeparator } from '../ItemSeparator/ItemSeparator';
import { ListItemTextWithChevron } from '../ListItemTextWithChevron/TextListItemWithChevron';
import { Footer } from './Footer';

import { TYPES_OF_SEARCH } from '../../dataManager/data/typesOfSearch';
import { styles } from './styles';

export const SearchNKOResults = ({ findedNKO = [], keyWords = '' }) => {
  const navigation = useNavigation();

  const onNKOPress = useCallback(
    title => {
      navigation.navigate({
        name: 'SearchEventsResult',
        params: {
          title,
          type: TYPES_OF_SEARCH.nkoTitle,
        },
      });
    },
    [navigation],
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.text}>{`Ключевые слова: ${keyWords}`}</Text>
        <Text style={styles.text}>
          {`Результаты поиска: ${findedNKO.length} организаций`}
        </Text>
      </View>
      <FlatList
        data={findedNKO}
        renderItem={({ item }) => (
          <ListItemTextWithChevron text={item} onPress={onNKOPress} />
        )}
        style={styles.list}
        keyExtractor={item => item}
        ItemSeparatorComponent={ItemSeparator}
        ListFooterComponent={Footer}
      />
    </View>
  );
};

SearchNKOResults.propTypes = {
  findedNKO: PropTypes.arrayOf(PropTypes.string).isRequired,
  keyWords: PropTypes.string.isRequired,
};

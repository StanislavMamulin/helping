import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

import { ItemSeparator } from './ItemSeparator';
import { RenderCategoryItem } from './RenderItem';
import { styles } from './styles';

export const CategoryList = ({ categories }) => (
  <FlatList
    data={categories}
    renderItem={RenderCategoryItem}
    numColumns={2}
    keyExtractor={item => item.title}
    ItemSeparatorComponent={ItemSeparator}
    columnWrapperStyle={styles.columnWrapper}
  />
);

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired),
  ),
};

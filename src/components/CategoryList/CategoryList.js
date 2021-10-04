import React from 'react';
import { FlatList, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

import { CategoryItem } from '../CategoryItem/CategoryItem';

const { width: windowWidth } = Dimensions.get('window');
const itemSize = {
  width: windowWidth / 2,
  aspectRatio: 1.31,
};

const renderItem = ({ item: { imageURL, title } }) => (
  <CategoryItem imageURL={imageURL} title={title} size={itemSize} />
);

export const CategoryList = ({ categories }) => (
  <FlatList
    data={categories}
    renderItem={renderItem}
    numColumns={2}
    keyExtractor={item => item.title}
  />
);

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired),
  ),
};

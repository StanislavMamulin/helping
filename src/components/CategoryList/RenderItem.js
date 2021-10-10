import React from 'react';
import { CategoryItem } from '../CategoryItem/CategoryItem';
import { styles } from './styles';

export const RenderCategoryItem = ({ item: { imageURL, title }, onPress }) => (
  <CategoryItem
    imageURL={imageURL}
    title={title}
    size={styles.itemSize}
    onPress={onPress}
  />
);

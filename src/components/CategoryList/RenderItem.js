import React from 'react';
import { CategoryItem } from '../CategoryItem/CategoryItem';
import { styles } from './styles';

export const RenderCategoryItem = ({ item: { imageURL, title } }) => (
  <CategoryItem imageURL={imageURL} title={title} size={styles.itemSize} />
);

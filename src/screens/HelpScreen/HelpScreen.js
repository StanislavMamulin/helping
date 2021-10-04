import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import { CategoryList } from '../../components/CategoryList/CategoryList';

import { styles } from './styles';

export const HelpScreen = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // get/set categories
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Выберите категорию помощи</Text>
      <CategoryList categories={categories} />
    </View>
  );
};

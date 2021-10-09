import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';

import { showHelpActionModal, setTypeOfHelp } from '../../redux/modalSlice';
import { TYPES_OF_HELP_ENUM } from '../../dataManager/data/typesOfHelp';

import { ItemSeparator } from './ItemSeparator';
import { RenderCategoryItem } from './RenderItem';

import { styles } from './styles';

export const CategoryList = ({ categories }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);
  const navigation = useNavigation();

  const showModal = useCallback(() => {
    dispatch(showHelpActionModal());
    dispatch(setTypeOfHelp(TYPES_OF_HELP_ENUM.money));
  }, [dispatch]);

  const handlePress = useCallback(() => {
    const anonymous = user.isAnonymous;
    if (anonymous) {
      navigation.navigate({
        name: 'Auth',
        params: {
          loginCallback: showModal,
        },
      });
    } else {
      showModal();
    }
  }, [user, navigation, showModal]);

  return (
    <FlatList
      data={categories}
      renderItem={({ item }) => (
        <RenderCategoryItem item={item} onPress={handlePress} />
      )}
      numColumns={2}
      keyExtractor={item => item.title}
      ItemSeparatorComponent={ItemSeparator}
      columnWrapperStyle={styles.columnWrapper}
    />
  );
};

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired),
  ),
};

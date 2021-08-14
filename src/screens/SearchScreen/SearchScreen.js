import React, { useLayoutEffect } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { HeaderRightButton } from '../../components/HeaderRightButton/HeaderRightButton';
import styles from './styles';

const SearchScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderRightButton type="find" onPress={() => {}} />,
    });
  }, [navigation]);

  return (
    <View>
    </View>
  );
};

SearchScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default SearchScreen;

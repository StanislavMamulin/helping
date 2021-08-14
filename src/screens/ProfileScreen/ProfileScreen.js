import React, { useLayoutEffect } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { HeaderRightButton } from '../../components/HeaderRightButton/HeaderRightButton';
import styles from './styles';

const ProfileScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderRightButton type="edit" onPress={() => {}} />,
    });
  }, [navigation]);

  return (
    <View>
      
    </View>
  );
};

ProfileScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default ProfileScreen;

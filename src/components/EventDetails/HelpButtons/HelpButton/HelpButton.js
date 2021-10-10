import React, { useCallback } from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import {
  showHelpActionModal,
  setTypeOfHelp,
} from '../../../../redux/modalSlice';

import { typesToIconMap, typesToLabelMap } from './dataMapping';
import styles from './styles';

export const HelpButton = ({ type }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);
  const navigation = useNavigation();

  const showModal = useCallback(() => {
    dispatch(showHelpActionModal());
    dispatch(setTypeOfHelp(type));
  }, [dispatch, type]);

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
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Image source={{ uri: typesToIconMap[type] }} style={styles.icon} />
      <Text style={styles.label}>{typesToLabelMap[type]}</Text>
    </TouchableOpacity>
  );
};

HelpButton.propTypes = {
  type: PropTypes.string.isRequired,
};

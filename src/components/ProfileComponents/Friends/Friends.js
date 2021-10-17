import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import { FriendsList } from './FriendsList/FriendsList';

import styles from './styles';

export const Friends = ({ friends }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Ваши друзья</Text>
    <FriendsList friends={friends} />
  </View>
);

Friends.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

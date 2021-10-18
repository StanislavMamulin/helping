import React from 'react';
import PropTypes from 'prop-types';
import { Friend } from './Friend/Friend';

export const FriendsList = ({ friends }) =>
  friends.map(friend => <Friend friendInfo={friend} key={friend.email} />);

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

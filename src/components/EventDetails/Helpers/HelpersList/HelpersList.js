import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { Avatar } from '../../../Avatar/Avatar';
import { styles, AVATAR_SIZE } from './styles';

export const HelpersList = ({
  helpers = [],
  numberOfHelpersToShow = 0,
  backgroundColor = '',
}) => (
  <View style={styles.avatarsContainer}>
    {helpers.slice(0, numberOfHelpersToShow).map((helper, index) => (
      <View style={{ left: index * -5, zIndex: numberOfHelpersToShow - index }}>
        <Avatar
          size={AVATAR_SIZE}
          imageSource={helper.avatar}
          borderStyle={{ ...styles.avatarBorder, borderColor: backgroundColor }}
        />
      </View>
    ))}
  </View>
);

HelpersList.propTypes = {
  helpers: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

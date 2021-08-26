import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const NUMBER_OF_HELPERS_TO_SHOW = 5;

const getNotShownHelpersCount = count => {
  const notShownHelpers = count - NUMBER_OF_HELPERS_TO_SHOW;
  return notShownHelpers > 0 ? `+${notShownHelpers}` : '';
};

const renderAvatars = (helpers = []) =>
  helpers
    .slice(0, NUMBER_OF_HELPERS_TO_SHOW)
    .map((helper, index) => (
      <Image
        key={helper.avatar}
        source={{ uri: helper.avatar }}
        style={[
          styles.avatar,
          { left: index * -5, zIndex: NUMBER_OF_HELPERS_TO_SHOW - index },
        ]}
      />
    ));

export const Helpers = ({ helpers = [] }) => (
  <View style={styles.container}>
    <View style={styles.avatarsContainer}>{renderAvatars(helpers)}</View>
    <Text style={styles.countText}>
      {getNotShownHelpersCount(helpers.length)}
    </Text>
  </View>
);

Helpers.propTypes = {
  helpers: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

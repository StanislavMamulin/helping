import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import { HelpersList } from './HelpersList/HelpersList';
import { styles, HELPERS_BG_COLOR } from './styles';

const NUMBER_OF_HELPERS_TO_SHOW = 5;

const getNotShownHelpersCount = count => {
  const notShownHelpers = count - NUMBER_OF_HELPERS_TO_SHOW;
  return notShownHelpers > 0 ? `+${notShownHelpers}` : '';
};

export const Helpers = ({ helpers = [] }) => (
  <View style={styles.container}>
    <HelpersList
      helpers={helpers}
      numberOfHelpersToShow={NUMBER_OF_HELPERS_TO_SHOW}
      backgroundColor={HELPERS_BG_COLOR}
    />
    <Text style={styles.countText}>
      {getNotShownHelpersCount(helpers.length)}
    </Text>
  </View>
);

HelpersList.propTypes = {
  helpers: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

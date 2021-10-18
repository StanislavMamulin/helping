import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';
import { FilterCell } from '../../FilterCell/FilterCell';

export const GetPush = ({ isEnabled = false, onChange = () => {} }) => (
  <View style={styles.container}>
    <FilterCell
      title="Получать push-уведомления"
      isEnabled={isEnabled}
      onChange={onChange}
    />
  </View>
);

GetPush.propTypes = {
  isEnabled: PropTypes.bool,
  onChange: PropTypes.func,
};

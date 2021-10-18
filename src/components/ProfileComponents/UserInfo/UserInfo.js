import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import { styles, inputStyle } from './styles';
import { InputField } from '../../InputFields/InputField/InputField';

export const UserInfo = ({
  firstName = 'Имя пока не задано...',
  lastName = '',
  dateOfBirth = '',
  specialization = '',
}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{`${lastName} ${firstName}`}</Text>
    <InputField
      title="Дата рождения"
      value={dateOfBirth}
      placeholder="Не задано"
      editable={false}
      extStyle={inputStyle}
    />
    <InputField
      title="Сфера деятельности"
      value={specialization}
      placeholder="Не задано"
      editable={false}
      extStyle={inputStyle}
    />
  </View>
);

UserInfo.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  dateOfBirth: PropTypes.string,
  specialization: PropTypes.string,
};

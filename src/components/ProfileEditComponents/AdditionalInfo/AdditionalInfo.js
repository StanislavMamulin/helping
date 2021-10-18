import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { CalendarField } from '../../InputFields/CalendarField/CalendarField';
import { InputField } from '../../InputFields/InputField/InputField';
import { PasswordField } from '../../InputFields/PasswordField/PasswordField';

import { texts } from './data';
import { inputStyles, styles } from './styles';

export const AdditionalInfo = ({
  dateOfBirth = '',
  specialization = '',
  email = '',
}) => (
  <View style={styles.container}>
    <CalendarField
      date={dateOfBirth}
      title={texts.dateOfBirth.title}
      placeholder={texts.dateOfBirth.placeholder}
      style={inputStyles.container}
      iconStyle={styles.iconStyles}
    />
    <InputField
      value={specialization}
      title={texts.specialization.title}
      placeholder={texts.specialization.placeholder}
      extStyle={inputStyles}
    />
    <PasswordField
      title={texts.password.title}
      placeholder={texts.password.placeholder}
      style={inputStyles.container}
    />
    <InputField
      value={email}
      title={texts.email.title}
      placeholder={texts.email.placeholder}
    />
  </View>
);

AdditionalInfo.propTypes = {
  dateOfBirth: PropTypes.string,
  specialization: PropTypes.string,
  email: PropTypes.string,
};

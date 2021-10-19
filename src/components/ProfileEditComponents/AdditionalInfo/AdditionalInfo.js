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
  onChangeInfo = () => {},
}) => (
  <View style={styles.container}>
    <CalendarField
      date={dateOfBirth}
      title={texts.dateOfBirth.title}
      placeholder={texts.dateOfBirth.placeholder}
      style={inputStyles.container}
      iconStyle={styles.iconStyles}
      onChangeText={date => onChangeInfo({ dateOfBirth: date })}
    />
    <InputField
      value={specialization}
      title={texts.specialization.title}
      placeholder={texts.specialization.placeholder}
      extStyle={inputStyles}
      onChangeText={text => onChangeInfo({ specialization: text })}
    />
    <PasswordField
      title={texts.password.title}
      placeholder={texts.password.placeholder}
      style={inputStyles.container}
      onChangeText={text => onChangeInfo({ password: text })}
    />
    <InputField
      value={email}
      title={texts.email.title}
      placeholder={texts.email.placeholder}
      onChangeText={text => onChangeInfo({ email: text })}
    />
  </View>
);

AdditionalInfo.propTypes = {
  dateOfBirth: PropTypes.string,
  specialization: PropTypes.string,
  email: PropTypes.string,
};

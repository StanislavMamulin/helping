import React from 'react';
import PropTypes from 'prop-types';

import { inputFieldStyles } from './styles';
import { InputField } from '../InputFields/InputField/InputField';

export const ContactsList = ({
  phone = '',
  email = '',
  specialization = '',
  showSpecialization = true,
  onChangeFieldValue = () => {},
}) => (
  <>
    <InputField
      title="Оставьте свой телефон"
      placeholder="+7 (___) ___-__-__"
      extStyle={inputFieldStyles}
      keyboardType="phone-pad"
      value={phone}
      onChangeText={text => onChangeFieldValue({ phone: text })}
    />
    <InputField
      title="или e-mail"
      placeholder="Введите e-mail"
      extStyle={inputFieldStyles}
      keyboardType="email-address"
      value={email}
      onChangeText={text => onChangeFieldValue({ email: text })}
    />
    {showSpecialization && (
      <InputField
        title={`и укажите специализацию,\nв которой можете помочь`}
        placeholder="Укажите специализацию"
        extStyle={inputFieldStyles}
        value={specialization}
        onChangeText={text => onChangeFieldValue({ specialization: text })}
      />
    )}
  </>
);

ContactsList.propTypes = {
  phone: PropTypes.string,
  email: PropTypes.string,
  specialization: PropTypes.string,
  showSpecialization: PropTypes.bool,
};

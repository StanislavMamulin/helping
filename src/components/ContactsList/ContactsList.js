import React from 'react';
import PropTypes from 'prop-types';

import { inputFieldStyles } from './styles';
import { InputField } from '../InputFields/InputField/InputField';

export const ContactsList = ({
  phone = '',
  email = '',
  specialization = '',
  showSpecialization = true,
}) => {
  return (
    <>
      <InputField
        title="Оставьте свой телефон"
        placeholder="+7 (___) ___-__-__"
        extStyle={inputFieldStyles}
        keyboardType="phone-pad"
        value={phone}
      />
      <InputField
        title="или e-mail"
        placeholder="Введите e-mail"
        extStyle={inputFieldStyles}
        keyboardType="email-address"
        value={email}
      />
      {showSpecialization && (
        <InputField
          title={`и укажите специализацию,\nв которой можете помочь`}
          placeholder="Укажите специализацию"
          extStyle={inputFieldStyles}
          value={specialization}
        />
      )}
    </>
  );
};

ContactsList.propTypes = {
  phone: PropTypes.string,
  email: PropTypes.string,
  specialization: PropTypes.string,
  showSpecialization: PropTypes.bool,
};

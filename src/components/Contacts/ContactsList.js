import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { ContactCard } from './ContactCard/ContactCard';

const includeContactsType = ['address', 'phones', 'email'];

export const ContactsList = ({ contacts = {} }) => (
  <View>
    {includeContactsType.map(type => {
      const contactsValue = contacts[type];
      const value = Array.isArray(contactsValue)
        ? contactsValue.join('\n')
        : contactsValue;
      return <ContactCard key={type} type={type} value={value} />;
    })}
  </View>
);

ContactsList.propTypes = {
  contacts: PropTypes.shape({
    address: PropTypes.string.isRequired,
    phones: PropTypes.arrayOf(PropTypes.string).isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

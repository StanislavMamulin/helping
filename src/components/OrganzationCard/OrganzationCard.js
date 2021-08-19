import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import { Contacts } from '../Contacts/Contacts';

export const OrganzationCard = ({ title, contacts }) => {

  return (
    <View>
      <Text>{title}</Text>
      <Contacts contacts={contacts} />
    </View>
  );
};

OrganzationCard.propTypes = {
  title: PropTypes.string.isRequired,
  contacts: PropTypes.object.isRequired,
};

import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import { Contacts } from '../Contacts/Contacts';

export const OrganzationCard = ({ nko: { title = '', contacts = {} } }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Contacts contacts={contacts} />
  </View>
);

OrganzationCard.propTypes = {
  nko: PropTypes.shape({
    title: PropTypes.string.isRequired,
    contacts: PropTypes.object.isRequired,
  }).isRequired,
};

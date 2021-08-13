import React from 'react';
import { Text, View, Linking } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import { EventCardDate } from '../EventCard/EventCardDate/EventCardDate';
import { Contacts } from './Contacts/Contacts';
import { Photos } from './Photos/Photos';
import { Helping } from './Helping/Helping';
import { HelpButtons } from './HelpButtons/HelpButtons';

export const HelpButton = props => {
  const { title, date, contacts, photos, description, typesOfHelp } = props;

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <EventCardDate date={date} />
      <Contacts contacts={contacts} />
      <Photos photos={photos} />
      <Text>{description}</Text>
      <Text>Перейти на сайт организации</Text>
      <Helping />
      <HelpButtons typesOfHelp={typesOfHelp} />
    </View>
  );
};

HelpButton.propTypes = {

};

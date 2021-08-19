import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Text, View, Linking } from 'react-native';
import PropTypes from 'prop-types';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles';
import { EventCardDate } from '../EventCard/EventCardDate/EventCardDate';
import { Photos } from './Photos/Photos';
import { Helpers } from './Helpers/Helpers';
import { HelpButtons } from './HelpButtons/HelpButtons';
import { OrganzationCard } from '../OrganzationCard/OrganzationCard';

export const EventDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();

  useLayoutEffect(() => {
    if (route.params?.title) {
      navigation.setOptions({ title: route.params?.title });
    }
  }, [navigation, route.params?.title]);

  const { title, date, titlePhoto, description } =
    route.params;

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <EventCardDate date={date} />
      <OrganzationCard  />
      <Photos photos={photos} />
      <Text>{description}</Text>
      <Text>Перейти на сайт организации</Text>
      <Helpers />
      <HelpButtons typesOfHelp={typesOfHelp} />
    </View>
  );
};

EventDetails.propTypes = {

};

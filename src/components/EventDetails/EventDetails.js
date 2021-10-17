import React, { useLayoutEffect, useEffect } from 'react';
import { Text, View, Linking, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';

import { setCurrentEvent } from '../../redux/eventSlice';
import { HeaderWithFadeTitle } from '../HeaderWithFadeTitle/HeaderWithFadeTitle';
import { EventCardDate } from '../EventCard/EventCardDate/EventCardDate';
import { Photos } from './Photos/Photos';
import { Helpers } from './Helpers/Helpers';
import { HelpButtons } from './HelpButtons/HelpButtons';
import { OrganzationCard } from '../OrganzationCard/OrganzationCard';

import styles from './styles';

export const EventDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const { title, date, titlePhoto, description, details } = route.params;
  const { nko, eventPhotos, helpers, typesOfHelp, id } = details;

  useLayoutEffect(() => {
    if (route.params?.title) {
      navigation.setOptions({
        headerTitle: () => <HeaderWithFadeTitle title={route.params?.title} />,
      });
    }
  }, [navigation, route.params?.title]);

  useEffect(() => {
    dispatch(setCurrentEvent({ title, date, id }));
  }, [title, date, id, dispatch]);

  return (
    <>
      <ScrollView>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{title}</Text>
          <EventCardDate
            date={date}
            theme={{
              container: styles.dateContaier,
              text: styles.dateText,
              icon: styles.dateIcon,
            }}
          />
          <OrganzationCard nko={nko} />
          <Photos photos={{ titlePhoto, eventPhotos }} />
          <Text style={styles.description}>{description}</Text>
          <Text
            style={styles.link}
            onPress={() => Linking.openURL(nko.contacts.site)}
          >
            Перейти на сайт организации
          </Text>
        </View>
        <Helpers helpers={helpers} />
      </ScrollView>
      <HelpButtons typesOfHelp={typesOfHelp} />
    </>
  );
};

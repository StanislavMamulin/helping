import React, { useLayoutEffect } from 'react';
import { Text, View, Linking, ScrollView } from 'react-native';
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
  const { title, date, titlePhoto, description, details } = route.params;
  const { nko, eventPhotos, helpers, typesOfHelp } = details;

  useLayoutEffect(() => {
    if (route.params?.title) {
      navigation.setOptions({
        title: route.params?.title,
      });
    }
  }, [navigation, route.params?.title]);

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

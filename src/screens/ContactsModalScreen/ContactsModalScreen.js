import React from 'react';
import { View, Modal, Text } from 'react-native';
import { styles } from './styles';
import { ButtonStrip } from '../../components/ButtonStrip/ButtonStrip';
import { ContactsList } from '../../components/ContactsList/ContactsList';

export const ContactsModalScreen = () => {
  return (
    <Modal visible transparent animationType="fade">
      <View style={styles.centeredView}>
        <View style={styles.container}>
          <View style={styles.contactsContainer}>
            <Text style={styles.headerTitle}>Спасибо за решение помочь!</Text>
            <ContactsList />
            <Text style={styles.fieldTitle}>Мы с вами свяжемся.</Text>
          </View>
          <ButtonStrip actionText="ОТПРАВИТЬ" />
        </View>
      </View>
    </Modal>
  );
};

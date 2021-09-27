import React from 'react';
import { View, Modal, Text } from 'react-native';
import { styles, inputFieldStyles } from './styles';
import { InputField } from '../../components/InputFields/InputField/InputField';
import { ButtonStrip } from '../../components/ButtonStrip/ButtonStrip';

export const ContactsModalScreen = () => {
  return (
    <Modal visible transparent animationType="fade">
      <View style={styles.centeredView}>
        <View style={styles.container}>
          <View style={styles.contactsContainer}>
            <Text style={styles.headerTitle}>Спасибо за решение помочь!</Text>
            <InputField
              title="Оставьте свой телефон"
              placeholder="+7 (___) ___-__-__"
              extStyle={inputFieldStyles}
              keyboardType="phone-pad"
            />
            <InputField
              title="или e-mail"
              placeholder="Введите e-mail"
              extStyle={inputFieldStyles}
              keyboardType="email-address"
            />
            <InputField
              title={`и укажите специализацию,\nв которой можете помочь`}
              placeholder="Укажите специализацию"
              extStyle={inputFieldStyles}
            />
            <Text style={styles.fieldTitle}>Мы с вами свяжемся.</Text>
          </View>
          <ButtonStrip actionText="ПЕРЕВЕСТИ" />
        </View>
      </View>
    </Modal>
  );
};

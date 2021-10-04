import React, { useCallback, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { updateContacts } from '../../redux/modalSlice';
import { styles } from './styles';
import { ButtonStrip } from '../ButtonStrip/ButtonStrip';
import { ContactsList } from '../ContactsList/ContactsList';
import { getUserContacts } from '../../dataManager/data/dataConverter';

export const ContactsContainer = ({
  onActionPress = () => {},
  onCancelPress = () => {},
  showSpecialization = true,
  actionText = 'ОТПРАВИТЬ',
}) => {
  const dispatch = useDispatch();
  const { phone, email, specialization } = useSelector(state => state.modal);
  const { user } = useSelector(state => state.user);

  useEffect(() => {
    if (user && !user.isAnonymous) {
      dispatch(updateContacts(getUserContacts(user)));
    }
  }, [user, dispatch]);

  const handleChangeFieldValue = useCallback(
    newContact => {
      dispatch(updateContacts(newContact));
    },
    [dispatch],
  );

  return (
    <>
      <View style={styles.contactsContainer}>
        <Text style={styles.headerTitle}>Спасибо за решение помочь!</Text>
        <ContactsList
          phone={phone}
          email={email}
          specialization={specialization}
          showSpecialization={showSpecialization}
          onChangeFieldValue={handleChangeFieldValue}
        />
        <Text style={styles.fieldTitle}>Мы с вами свяжемся.</Text>
      </View>
      <ButtonStrip
        actionText={actionText}
        onActionPress={onActionPress}
        onCancelPress={onCancelPress}
      />
    </>
  );
};

ContactsContainer.propTypes = {
  onActionPress: PropTypes.func,
  onCancelPress: PropTypes.func,
  showSpecialization: PropTypes.bool,
  actionText: PropTypes.string,
};

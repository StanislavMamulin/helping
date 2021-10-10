import React from 'react';
import { View, Modal } from 'react-native';
import PropTypes from 'prop-types';

import { SuccessHelpNotification } from '../../components/SuccessHelpNotificatio/SuccessHelpNotification';
import { ContactsContainer } from '../../components/ContactsContainer/ContactsContainer';

import { styles } from './styles';

export const ContactsModalScreen = ({
  show = false,
  onActionPress,
  onCancelPress,
  showSpecialization,
  helpProvided = false,
  actionText,
}) => (
  <Modal visible={show} transparent animationType="fade">
    <View style={styles.centeredView}>
      <View style={styles.container}>
        {helpProvided ? (
          <SuccessHelpNotification onActionPress={onActionPress} />
        ) : (
          <ContactsContainer
            onActionPress={onActionPress}
            onCancelPress={onCancelPress}
            showSpecialization={showSpecialization}
            actionText={actionText}
          />
        )}
      </View>
    </View>
  </Modal>
);

ContactsModalScreen.propTypes = {
  show: PropTypes.bool.isRequired,
  onActionPress: PropTypes.func,
  onCancelPress: PropTypes.func,
  showSpecialization: PropTypes.bool,
  helpProvided: PropTypes.bool.isRequired,
  actionText: PropTypes.string,
};

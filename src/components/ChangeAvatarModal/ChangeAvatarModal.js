import React from 'react';
import { Modal, View } from 'react-native';
import PropTypes from 'prop-types';

import { ChangerItem } from './ChangerItem/ChangerItem';

import { styles } from './styles';

export const ChangeAvatarModal = ({ show }) => (
  <Modal visible={show} transparent animationType="fade">
    <View style={styles.centeredView}>
      <View style={styles.container}>
        <ChangerItem
          type="upload"
          text="Выбрать фото"
          style={styles.separator}
        />
        <ChangerItem
          type="camera"
          text="Сделать снимок"
          style={styles.separator}
        />
        <ChangerItem type="delete" text="Удалить" />
      </View>
    </View>
  </Modal>
);

ChangeAvatarModal.propTypes = {
  show: PropTypes.bool.isRequired,
};

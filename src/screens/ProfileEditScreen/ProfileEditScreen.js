import React, { useLayoutEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { HeaderRightButton } from '../../components/HeaderRightButton/HeaderRightButton';
import { PhotoAndNames } from '../../components/ProfileEditComponents/PhotoAndNames/PhotoAndNames';
import { AdditionalInfo } from '../../components/ProfileEditComponents/AdditionalInfo/AdditionalInfo';

import { styles } from './styles';
import { ChangeAvatarModal } from '../../components/ChangeAvatarModal/ChangeAvatarModal';

export const ProfileEditScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderRightButton
          type="ok_icon"
          onPress={() => {}}
        />
      ),
    });
  }, [navigation]);

  const { avatar, firstName, lastName, dateOfBirth, specialization, email } =
    useSelector(state => state.user.user);

  const [showChangeAvatarModal, setShowChangeAvatarModal] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <ChangeAvatarModal show={showChangeAvatarModal} />
      <PhotoAndNames avatar={avatar} name={firstName} surname={lastName} />
      <AdditionalInfo
        dateOfBirth={dateOfBirth}
        specialization={specialization}
        email={email}
      />
    </ScrollView>
  );
};

ProfileEditScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

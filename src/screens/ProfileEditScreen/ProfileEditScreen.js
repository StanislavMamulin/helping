import React, { useLayoutEffect, useState, useCallback } from 'react';
import { ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import { HeaderRightButton } from '../../components/HeaderRightButton/HeaderRightButton';
import { PhotoAndNames } from '../../components/ProfileEditComponents/PhotoAndNames/PhotoAndNames';
import { AdditionalInfo } from '../../components/ProfileEditComponents/AdditionalInfo/AdditionalInfo';

import { styles } from './styles';
import { ChangeAvatarModal } from '../../components/ChangeAvatarModal/ChangeAvatarModal';
import { uploadAvatar, changeUserInfo } from '../../dataManager/profileManager';
import { changeTempUserInfo, userInfoIsChanged } from '../../redux/userSlice';

export const ProfileEditScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { changedUserInfo } = useSelector(state => state.user);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderRightButton
          type="ok_icon"
          onPress={async () => {
            dispatch(userInfoIsChanged());
            await changeUserInfo(changedUserInfo.uid, changedUserInfo);
            navigation.goBack();
          }}
        />
      ),
    });
  }, [navigation, dispatch, changedUserInfo]);

  const {
    avatar,
    firstName,
    lastName,
    dateOfBirth,
    specialization,
    email,
    uid,
  } = changedUserInfo;

  const [showChangeAvatarModal, setShowChangeAvatarModal] = useState(false);

  const upload = useCallback(
    async ({ didCancel, assets }) => {
      setShowChangeAvatarModal(false);
      if (!didCancel) {
        const { uri } = assets[0];
        const avatarURL = await uploadAvatar(uid, uri);
        dispatch(changeTempUserInfo({ avatar: avatarURL }));
      }
    },
    [uid, dispatch],
  );

  const handleUpload = useCallback(() => {
    launchImageLibrary(
      {
        mediaType: 'photo',
      },
      upload,
    );
  }, [upload]);

  const handleCamera = useCallback(() => {
    launchCamera(
      {
        mediaType: 'photo',
        saveToPhotos: true,
      },
      upload,
    );
  }, [upload]);

  const handleDeleteAvatar = useCallback(() => {
    setShowChangeAvatarModal(false);
    dispatch(changeTempUserInfo({ avatar: null }));
  }, [dispatch]);

  const handleAvatarPress = useCallback(() => {
    setShowChangeAvatarModal(true);
  }, []);

  const handleChangeUserInfo = useCallback(
    info => {
      dispatch(changeTempUserInfo(info));
    },
    [dispatch],
  );

  return (
    <ScrollView style={styles.container}>
      <ChangeAvatarModal
        show={showChangeAvatarModal}
        onCameraPress={handleCamera}
        onUploadPress={handleUpload}
        onDeletePress={handleDeleteAvatar}
      />
      <PhotoAndNames
        avatar={avatar}
        name={firstName}
        surname={lastName}
        onAvatarPress={handleAvatarPress}
        onChangeNames={handleChangeUserInfo}
      />
      <AdditionalInfo
        dateOfBirth={dateOfBirth}
        specialization={specialization}
        email={email}
        onChangeInfo={handleChangeUserInfo}
      />
    </ScrollView>
  );
};

ProfileEditScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

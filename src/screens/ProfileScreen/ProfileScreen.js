import React, { useEffect, useLayoutEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';

import { HeaderRightButton } from '../../components/HeaderRightButton/HeaderRightButton';
import { UserAvatar } from '../../components/ProfileComponents/UserAvatar/UserAvatar';
import { UserInfo } from '../../components/ProfileComponents/UserInfo/UserInfo';
import { GetPush } from '../../components/ProfileComponents/GetPush/GetPush';
import { Friends } from '../../components/ProfileComponents/Friends/Friends';
import { ButtonThemed } from '../../components/ButtonThemed/ButtonThemed';

import { getUsersInfo, signOut } from '../../dataManager/userManager';
import { checkUserAuth, userSignOut } from '../../redux/userSlice';

import { styles } from './styles';

export const ProfileScreen = ({ navigation }) => {
  const {
    avatar,
    firstName,
    lastName,
    dateOfBirth,
    specialization,
    receivePush,
    friends,
    isAnonymous,
  } = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  const [friendsList, setFriendsList] = useState([]);
  const [authUser, setAuthUser] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderRightButton type="edit" onPress={() => {}} />,
    });
  }, [navigation]);

  useFocusEffect(() => {
    if (isAnonymous) {
      navigation.navigate({
        name: 'Auth',
        params: {
          loginCallback: () => {
            setAuthUser(true);
          },
        },
      });
    }
  });

  useEffect(() => {
    const usersInfoReceiver = async () => {
      const receivedFriends = await getUsersInfo(friends);
      setFriendsList(receivedFriends);
    };

    if (friends && friends.length > 0) {
      usersInfoReceiver();
    }
  }, [friends]);

  const handleLogoutButtonPresses = () => {
    signOut();
    setAuthUser(false);
    dispatch(userSignOut());
    dispatch(checkUserAuth());
  };

  if (!authUser) {
    return <ScrollView />;
  }

  return (
    <ScrollView style={styles.container}>
      <UserAvatar avatarURL={avatar} />
      <UserInfo
        firstName={firstName}
        lastName={lastName}
        dateOfBirth={dateOfBirth}
        specialization={specialization}
      />
      <GetPush isEnabled={receivePush} />
      <Friends friends={friendsList} />
      <ButtonThemed
        text="Выйти из аккаунта"
        onPress={handleLogoutButtonPresses}
        styleButton={styles.logoutButton}
        styleText={styles.logoutButtonText}
      />
    </ScrollView>
  );
};

ProfileScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

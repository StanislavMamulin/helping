import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';

import { AuthButtonsList } from './AuthButtonsList/AuthButtonsList';
import { InputField } from '../../components/InputFields/InputField/InputField';
import { ButtonThemed } from '../../components/ButtonThemed/ButtonThemed';
import { LinkThemed } from '../../components/LinkThemed/LinkThemed';
import { PasswordField } from '../../components/InputFields/PasswordField/PasswordField';

import { signIn, signInWithFacebook } from '../../redux/userSlice';

import { styles } from './styles';

export const AuthScreen = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);
  const route = useRoute();
  const navigation = useNavigation();

  const signinCallback = useRef(() => {});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const { loginCallback } = route.params;
    if (loginCallback) {
      signinCallback.current = loginCallback;
    }
  }, [route.params]);

  const handleForgotPasswordPress = useCallback(() => {}, []);
  const handleRegistrationPress = useCallback(() => {}, []);
  const handleSocialButtonPress = useCallback(
    async type => {
      if (type === 'fb') {
        try {
          await dispatch(signInWithFacebook());
        } catch (err) {
          console.error(err);
        }
      }
    },
    [dispatch],
  );

  const handleLoginPress = useCallback(() => {
    dispatch(signIn({ email, password }));
  }, [email, password, dispatch]);

  useEffect(() => {
    if (user && !user.isAnonymous) {
      navigation.goBack();
      signinCallback.current();
    }
  }, [user, navigation]);

  return (
    <View style={styles.container}>
      <Text numberOfLines={2} style={styles.text}>
        Для участия в мероприятиях войдите в приложение через социальные сети
      </Text>
      <AuthButtonsList
        onPress={handleSocialButtonPress}
        layoutStyle={styles.socialButtonsBlock}
      />
      <Text style={styles.text}>Или авторизуйтесь через приложение</Text>
      <InputField
        title="E-mail"
        placeholder="Введите e-mail"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        style={styles.emailField}
      />
      <PasswordField
        value={password}
        onChangeText={setPassword}
        style={styles.passwordField}
      />
      <ButtonThemed
        text="ВОЙТИ"
        styleButton={styles.button}
        styleText={styles.buttonText}
        onPress={handleLoginPress}
      />
      <View style={styles.linkContainer}>
        <LinkThemed text="Забыли пароль?" onPress={handleForgotPasswordPress} />
        <LinkThemed text="Регистрация" onPress={handleRegistrationPress} />
      </View>
    </View>
  );
};

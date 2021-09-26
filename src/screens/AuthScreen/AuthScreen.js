import React, { useCallback, useState } from 'react';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';

import { AuthButtonsList } from './AuthButtonsList/AuthButtonsList';
import { InputField } from '../../components/InputFields/InputField/InputField';
import { ButtonThemed } from '../../components/ButtonThemed/ButtonThemed';
import { LinkThemed } from '../../components/LinkThemed/LinkThemed';

import { signIn } from '../../redux/userSlice';

import { styles } from './styles';
import { PasswordField } from '../../components/InputFields/PasswordField/PasswordField';

export const AuthScreen = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleForgotPasswordPress = useCallback(() => {}, []);
  const handleRegistrationPress = useCallback(() => {}, []);
  const handleSocialButtonPress = useCallback(type => {}, []);
  const handleLoginPress = useCallback(() => {
    dispatch(signIn({ email, password }));
  }, [email, password, dispatch]);

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

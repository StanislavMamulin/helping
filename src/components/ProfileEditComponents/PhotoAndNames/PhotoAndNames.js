import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { AvatarEditable } from '../../AvatarEditable/AvatarEditable';
import { InputField } from '../../InputFields/InputField/InputField';

import { styles, avatarSize, inputStyles } from './styles';

export const PhotoAndNames = ({ avatar, name, surname, onAvatarPress }) => (
  <View style={styles.container}>
    <AvatarEditable
      imageSource={avatar}
      size={avatarSize}
      onPress={onAvatarPress}
    />
    <View style={styles.namesBlock}>
      <InputField
        title="Ваша фамилия"
        placeholder="Введите фамилию"
        value={surname}
        extStyle={inputStyles}
      />
      <InputField title="Ваше имя" placeholder="Введите имя" value={name} />
    </View>
  </View>
);

PhotoAndNames.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  surname: PropTypes.string,
  onAvatarPress: PropTypes.func,
};

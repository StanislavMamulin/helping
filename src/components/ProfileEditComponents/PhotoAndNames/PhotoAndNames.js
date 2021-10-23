import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { AvatarEditable } from '../../AvatarEditable/AvatarEditable';
import { InputField } from '../../InputFields/InputField/InputField';

import { styles, avatarSize, inputStyles } from './styles';

export const PhotoAndNames = ({
  avatar,
  name,
  surname,
  onAvatarPress,
  onChangeNames,
}) => (
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
        onChangeText={text => onChangeNames({ lastName: text })}
      />
      <InputField
        title="Ваше имя"
        placeholder="Введите имя"
        value={name}
        onChangeText={text => onChangeNames({ firstName: text })}
      />
    </View>
  </View>
);

PhotoAndNames.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  surname: PropTypes.string,
  onAvatarPress: PropTypes.func,
};

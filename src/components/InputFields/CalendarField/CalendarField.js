import React, { useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import { InputField } from '../InputField/InputField';

import { styles } from './styles';

const bottomBorderStyle = active =>
  active ? styles.textInputFocused : styles.textInputBlurred;

export const CalendarField = ({
  date = '',
  onChangeText = () => {},
  style = {},
  iconStyle = {},
  title = '',
  placeholder = '',
  onCalendarPress = () => {},
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <View style={[styles.container, bottomBorderStyle(isActive), style]}>
      <View style={styles.input}>
        <InputField
          title={title}
          placeholder={placeholder}
          value={date}
          onChangeText={onChangeText}
          multiline={false}
          style={{ borderBottomWidth: 0 }}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
        />
      </View>
      <View style={styles.showHideContainer}>
        <TouchableOpacity onPress={onCalendarPress}>
          <Image
            source={{ uri: 'icon_calendar' }}
            style={[styles.icon, iconStyle]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

CalendarField.propTypes = {
  date: PropTypes.string,
  onChangeText: PropTypes.func,
  style: PropTypes.object,
  iconStyle: PropTypes.object,
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onCalendarPress: PropTypes.func,
};

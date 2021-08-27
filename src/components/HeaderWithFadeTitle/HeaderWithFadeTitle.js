import React, { useState } from 'react';
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { styles, fadeColors } from './styles';

export const HeaderWithFadeTitle = ({ title }) => {
  const [isLongTitle, setIsLongTitle] = useState(false);

  return (
    <View style={styles.container}>
      <Text
        style={styles.titleText}
        numberOfLines={1}
        ellipsizeMode="clip"
        onTextLayout={({ nativeEvent: { lines } }) => {
          if (lines.length > 1) {
            setIsLongTitle(true);
          } else {
            setIsLongTitle(false);
          }
        }}
      >
        {title}
      </Text>
      {isLongTitle ? (
        <LinearGradient
          style={styles.textFade}
          colors={fadeColors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        />
      ) : null}
    </View>
  );
};

import React from 'react';
import { Image, View, Text } from 'react-native';

import { styles } from './styles';

export const EmptyHistory = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'icon_ketter' }} style={styles.scrollImage} />
      <View>
        <Text style={styles.title}>История пуста</Text>
        <Text
          style={styles.description}
        >{`Вы еще не участвовали\nни в одном мероприятии.`}</Text>
      </View>
      <View style={styles.bottomDescriptionBlock}>
        <Text
          style={styles.description}
        >{`Нажмите «Помочь»,\nчтобы принять участие`}</Text>
        <Image source={{ uri: 'icon_arrow' }} style={styles.arrowImage} />
      </View>
    </View>
  );
};

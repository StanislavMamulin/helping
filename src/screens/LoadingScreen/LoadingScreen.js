import React from 'react';
import { Image, View, Text } from 'react-native';
import { Loader } from '../../components/Loader/Loader';
import styles from './styles';

export const LoadingScreen = () => (
  <View style={styles.container}>
    <Image source={{ uri: 'icon_logo' }} style={styles.logo} />
    <View>
      <Loader />
      <Text style={styles.loadingText}>Загрузка...</Text>
    </View>
    <Image source={{ uri: 'logo_mss' }} style={styles.developer} />
  </View>
);

import { StyleSheet } from 'react-native';
import { textStyles } from '../../../commonStyles/text';

export const styles = StyleSheet.create({
  photoPart: {
    aspectRatio: 1.51,
  },
  photoWrapper: {
    flex: 1,
    margin: 4,
  },
  photo: {
    borderRadius: 2,
    resizeMode: 'cover',
  },
  fade: {
    flex: 1,
  },
  textPart: {
    width: 'auto',
    height: 'auto',
    marginTop: -10,
  },
  title: {
    ...textStyles.TEXT_STYLE_6,

    marginHorizontal: 38,
    marginBottom: 8,
  },
  decorWrapper: {
    marginTop: 8,
    marginBottom: 10,
    marginHorizontal: 115,
  },
  decor: {
    aspectRatio: 5.65,
  },
  description: {
    ...textStyles.TEXT_STYLE_3,

    marginHorizontal: 26,
    marginBottom: 16,
  },
});

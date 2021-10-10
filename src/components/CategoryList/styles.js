import { StyleSheet, Dimensions } from 'react-native';

const { width: windowWidth } = Dimensions.get('window');
const OUTTER_CONTAINER_PADDING = 16;
const SPACE_BETWEEN_ITEMS = 8;
const NUMBER_OF_COLUMNS = 2;

export const styles = StyleSheet.create({
  itemSize: {
    width:
      (windowWidth - OUTTER_CONTAINER_PADDING) / NUMBER_OF_COLUMNS -
      SPACE_BETWEEN_ITEMS / NUMBER_OF_COLUMNS,
    aspectRatio: 1.33,
  },
  verticalSpacer: {
    height: SPACE_BETWEEN_ITEMS,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});

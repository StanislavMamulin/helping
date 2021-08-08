import React, { useLayoutEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { HeaderRightButton } from '../../components/HeaderRightButton/HeaderRightButton';
import { FilterCell } from '../../components/FilterCell/FilterCell';
import styles from './styles';

import { typesOfHelp } from '../../dataManager/data/typesOfHelp';

const ItemSeparator = () => <View style={styles.separator} />;

const goToPrevScreenWithFilter = (navigation, toShow) => {
  navigation.navigate({
    name: 'Events',
    params: { toShow },
    merge: true,
  });
};

export const FilterScreen = ({ navigation, route }) => {
  const [toShow, setToShow] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderRightButton
          type="ok"
          onPress={() => {
            goToPrevScreenWithFilter(navigation, toShow);
          }}
        />
      ),
    });
  }, [navigation, toShow]);

  // set the type of displayed events based on values from the Events screen
  useLayoutEffect(() => {
    if (route.params?.toShow) {
      setToShow(route.params.toShow);
    }
  }, [route.params?.toShow]);

  const renderItem = ({ item }) => {
    const filterChanged = switchState => {
      if (switchState === true) {
        setToShow(filters => [...filters, item]);
      } else {
        setToShow(filters => [...filters.filter(type => type !== item)]);
      }
    };

    const isEnabled = toShow.includes(item);

    return (
      <FilterCell isEnabled={isEnabled} title={item} onChange={filterChanged} />
    );
  };

  return (
    <View>
      <Text style={styles.title}>Как вы хотите помочь?</Text>
      <FlatList
        data={typesOfHelp}
        renderItem={renderItem}
        style={styles.list}
        keyExtractor={(_item, index) => index}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  );
};

FilterScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      toShow: PropTypes.arrayOf(PropTypes.string),
    }),
  }).isRequired,
};

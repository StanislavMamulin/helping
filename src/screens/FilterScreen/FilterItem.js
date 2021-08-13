import React from 'react';
import { FilterCell } from '../../components/FilterCell/FilterCell';

export const FilterItem = ({ item, setToShow, toShow }) => {
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

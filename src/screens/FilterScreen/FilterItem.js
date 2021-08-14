import React, { useCallback } from 'react';
import { FilterCell } from '../../components/FilterCell/FilterCell';

export const FilterItem = ({ item, setToShow, toShow }) => {
  const filterChanged = useCallback(
    switchState => {
      if (switchState === true) {
        setToShow(filters => [...filters, item]);
      } else {
        setToShow(filters => [...filters.filter(type => type !== item)]);
      }
    },
    [item, setToShow],
  );

  const isEnabled = toShow.includes(item);

  return (
    <FilterCell isEnabled={isEnabled} title={item} onChange={filterChanged} />
  );
};

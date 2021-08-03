import React from 'react';
import { EventCard } from '../EventCard/EventCard';

export const renderEvent = ({ item }) => {
  const { photo, title, description, date } = item;

  return (
    <EventCard
      photo={photo}
      title={title}
      description={description}
      date={date}
    />
  );
};

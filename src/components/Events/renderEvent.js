import React from 'react';
import { EventCard } from '../EventCard/EventCard';

export const renderEvent = ({ item: { photo, title, description, date } }) => (
  <EventCard
    photo={photo}
    title={title}
    description={description}
    date={date}
  />
);

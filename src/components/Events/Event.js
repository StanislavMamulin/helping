import React from 'react';
import { EventCard } from '../EventCard/EventCard';

export const Event = ({ item: { photo, title, description, date } }) => (
  <EventCard
    titlePhoto={titlePhoto}
    title={title}
    description={description}
    date={date}
    details={details}
  />
);

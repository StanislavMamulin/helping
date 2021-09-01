import React from 'react';
import { EventCard } from '../EventCard/EventCard';

export const Event = ({
  item: { titlePhoto, title, description, date, ...details },
}) => (
  <EventCard
    titlePhoto={titlePhoto}
    title={title}
    description={description}
    date={date}
    details={details}
  />
);

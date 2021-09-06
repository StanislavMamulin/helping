import { getPartOfEvents, getEventsByIDs } from './firebase/firebase';
import { findByEventsTitle, findByNKOTitle } from './search/algolia';

export const getFirstEvents = async count => {
  try {
    const events = await getPartOfEvents({ firstPart: true, count });

    return events;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getNextEvents = async count => {
  try {
    const events = await getPartOfEvents({ firstPart: false, count });

    return events;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const findEventsByTitle = async query => {
  try {
    const eventsIDs = await findByEventsTitle(query);
    const events = await getEventsByIDs(eventsIDs);
    return events;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const findEventsByNKO = async query => {
  try {
    const eventsIDs = await findByNKOTitle(query);
    const events = await getEventsByIDs(eventsIDs);
    return events;
  } catch (err) {
    console.error(err);
    return [];
  }
};

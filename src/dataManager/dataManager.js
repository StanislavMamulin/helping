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

const NUMBER_OF_RESULTS_IN_THE_SEARCH = 5;
export const findEventsByTitle = async title => {
  const searchQuery = {
    searchString: title,
    count: NUMBER_OF_RESULTS_IN_THE_SEARCH,
  };

  try {
    const eventsIDs = await findByEventsTitle(searchQuery);
    const events = await getEventsByIDs(eventsIDs);
    return events;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const findEventsByNKO = async nkoTitle => {
  const searchQuery = {
    searchString: nkoTitle,
    count: NUMBER_OF_RESULTS_IN_THE_SEARCH,
  };

  try {
    const eventsIDs = await findByNKOTitle(searchQuery);
    const events = await getEventsByIDs(eventsIDs);
    return events;
  } catch (err) {
    console.error(err);
    return [];
  }
};

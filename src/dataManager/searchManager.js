import {
  findByEventsTitle,
  findByNKOTitle,
  searchNKOByTitle,
  clearSearchState,
} from './search/algolia';
import { getEventsByIDs } from './firebase/firebase';

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

export const resetSearch = () => {
  clearSearchState();
};

export const findNKOByTitle = async nkoTitle => {
  const NKOs = await searchNKOByTitle(nkoTitle);

  return NKOs;
};

/* eslint-disable no-console */
import { getCategoriesOfHelp, getPartOfEvents } from './firebase/firebase';

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

export const getHelpCategories = async () => {
  try {
    return await getCategoriesOfHelp();
  } catch (err) {
    console.error(err);
    return [];
  }
};

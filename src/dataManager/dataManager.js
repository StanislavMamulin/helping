import { getPartOfEvents } from './firebase/firebase';

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

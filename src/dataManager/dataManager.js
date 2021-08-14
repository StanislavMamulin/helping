import { getFirstEventsPart, getNextEventsPart } from './firebase/firebase';

export const getFirstEvents = async count => {
  try {
    const events = await getFirstEventsPart(count);

    return events;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getNextEvents = async count => {
  try {
    const events = await getNextEventsPart(count);

    return events;
  } catch (err) {
    console.error(err);
    return [];
  }
};

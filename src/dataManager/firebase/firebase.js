import firestore from '@react-native-firebase/firestore';
import startOfToday from 'date-fns/startOfToday';

let lastEvent;

const getNKOData = async nko => {
  try {
    const nkoSnapshot = await firestore().doc(nko.path).get();

    return nkoSnapshot.data();
  } catch (err) {
    console.error(err);
    return {};
  }
};

const getHelpersData = async helpers => {
  try {
    const helpersPromises = helpers.map(userRef =>
      firestore()
        .doc(userRef.path)
        .get()
    );
    const helpersSnapshots = await Promise.all(helpersPromises);

    return helpersSnapshots.map(docSnapshot => docSnapshot.data());
  } catch (err) {
    console.error(err);
    return [];
  }
};

const getPartQuery = ({ firstPart = true, count = 0 }) => {
  const today = startOfToday().getTime();

  if (firstPart) {
    return firestore()
      .collection('Events')
      .where('date.to', '>=', today)
      .orderBy('date.to')
      .orderBy('dateAdded', 'desc')
      .limit(count);
  }

  return firestore()
    .collection('Events')
    .where('date.to', '>=', today)
    .orderBy('date.to')
    .orderBy('dateAdded', 'desc')
    .startAfter(lastEvent.data().date.to)
    .limit(count);
};

export const getPartOfEvents = async ({ firstPart, count = 0 }) => {
  const events = [];
  const firebaseQuery = getPartQuery({ firstPart, count });

  try {
    const eventsDoc = await firebaseQuery.get();

    if (!eventsDoc.empty) {
      lastEvent = eventsDoc.docs[eventsDoc.docs.length - 1];

      const eventData = [];
      eventsDoc.forEach(docSnapshot => {
        eventData.push(docSnapshot.data());
      });

      // объединение данных из разных коллекций
      const eventsDataPromises = eventData.map(async event => {
        const helpers = await getHelpersData(event.helpers);
        const nko = await getNKOData(event.nko);

        events.push({
          ...event,
          helpers,
          nko,
        });
      });

      await Promise.all(eventsDataPromises);
    }

    return events;
  } catch (err) {
    console.error(err);
    return events;
  }
};

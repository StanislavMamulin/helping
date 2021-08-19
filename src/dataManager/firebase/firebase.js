import firestore from '@react-native-firebase/firestore';
import startOfToday from 'date-fns/startOfToday';

let lastEvent;

export const getFirstEventsPart = async count => {
  const events = [];
  const today = startOfToday().getTime();

  try {
    const eventsDoc = await firestore()
      .collection('Events')
      .where('date.to', '>=', today)
      .orderBy('date.to')
      .orderBy('dateAdded', 'desc')
      .limit(count)
      .get();

    if (!eventsDoc.empty) {
      lastEvent = eventsDoc.docs[eventsDoc.docs.length - 1];
      eventsDoc.forEach(doc => events.push(doc.data()));
    }

    return events;
  } catch (err) {
    console.error(err);
    return events;
  }
};

export const getNextEventsPart = async count => {
  const events = [];

  try {
    const today = startOfToday().getTime();
    const eventsDoc = await firestore()
      .collection('Events')
      .where('date.to', '>=', today)
      .orderBy('date.to')
      .orderBy('dateAdded', 'desc')
      .startAfter(lastEvent.data().date.to)
      .limit(count)
      .get();

    if (!eventsDoc.empty) {
      lastEvent = eventsDoc.docs[eventsDoc.docs.length - 1];
      eventsDoc.forEach(doc => events.push(doc.data()));
    }

    return events;
  } catch (err) {
    console.error(err);
    return events;
  }
};

/* eslint-disable no-console */
import RNFetchBlob from 'rn-fetch-blob';
import 'react-native-get-random-values';
import { nanoid } from 'nanoid';

import {
  addHelpToUser,
  getCategoriesOfHelp,
  getHelpReportURLByID,
  getHelpsForUser,
  getPartOfEvents,
} from './firebase/firebase';

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

export const addHelp = async (userID, helpInfo) => {
  try {
    await addHelpToUser(userID, { ...helpInfo, charityID: nanoid() });
  } catch (err) {
    console.error(err);
  }
};

export const getHelps = async userID => {
  try {
    return await getHelpsForUser(userID);
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const downloadHelpReportByID = async charityID => {
  const { DownloadDir } = RNFetchBlob.fs.dirs;

  try {
    const reportURL = await getHelpReportURLByID(charityID);

    RNFetchBlob.config({
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        mime: 'application/pdf',
        title: 'Charity report downloading',
        description: 'Charity report',
        path: `${DownloadDir}/CharityReport_${charityID}.pdf`,
      },
    })
      .fetch('GET', reportURL)
      .catch(error => {
        console.error('Error', error);
      });
  } catch (err) {
    console.error(err);
  }
};

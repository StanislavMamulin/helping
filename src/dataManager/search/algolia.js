import algoliasearch from 'algoliasearch';

const SEARCH_KEY = 'b0042986cdaad3bbf862aed7cbde2026';
const ALGOLIA_APP_ID = 'V9WUY9IQ3K';
const client = algoliasearch(ALGOLIA_APP_ID, SEARCH_KEY);
const eventIndex = client.initIndex('HelperEvents');
const nkoIndex = client.initIndex('NKOTitle');

let prevSearchString = '';
let totalPage = 1;
let currentPage = 0;

const resetSearchState = () => {
  prevSearchString = '';
  totalPage = 1;
  currentPage = 0;
};

const findNKO = async (nkoTitle = '') => {
  if (prevSearchString !== nkoTitle) {
    resetSearchState();
    prevSearchString = nkoTitle;
  }
  if (nkoTitle === '') {
    return [];
  }

  try {
    const searchResponse = await nkoIndex.search(nkoTitle, {
      restrictSearchableAttributes: ['title'],
      attributesToRetrieve: ['title'],
    });

    const { hits } = searchResponse;

    return hits.map(result => result.title);
  } catch (err) {
    console.error(err);
    return [];
  }
};

const findEvents = async ({
  type = 'eventsTitles',
  searchString = '',
  count = 0,
}) => {
  const searchType = type === 'eventsTitles' ? 'title' : 'nko.title';

  if (prevSearchString !== searchString) {
    resetSearchState();
    prevSearchString = searchString;
  }
  if (currentPage >= totalPage) {
    return [];
  }
  if (searchString === '') {
    return [];
  }

  try {
    const searchResponse = await eventIndex.search(searchString, {
      restrictSearchableAttributes: [searchType],
      attributesToRetrieve: ['objectID'],
      hitsPerPage: count,
      page: currentPage,
      optionalWords: searchString,
    });

    const { nbPages, hits } = searchResponse;
    totalPage = nbPages;
    currentPage += 1;

    return hits.map(result => result.objectID);
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const findByEventsTitle = async ({ searchString = '', count = 0 }) => {
  const eventsIDs = await findEvents({
    type: 'eventsTitles',
    searchString,
    count,
  });

  return eventsIDs;
};

export const findByNKOTitle = async ({ searchString = '', count = 0 }) => {
  const eventsIDs = await findEvents({
    type: 'nkoTitles',
    searchString,
    count,
  });

  return eventsIDs;
};

export const searchNKOByTitle = async nkoTitle => {
  const NKOTitles = await findNKO(nkoTitle);

  return NKOTitles;
};

export const clearSearchState = () => {
  resetSearchState();
};

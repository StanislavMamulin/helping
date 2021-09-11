import algoliasearch from 'algoliasearch';

const SEARCH_KEY = 'b0042986cdaad3bbf862aed7cbde2026';
const ALGOLIA_APP_ID = 'V9WUY9IQ3K';
const client = algoliasearch(ALGOLIA_APP_ID, SEARCH_KEY);
const index = client.initIndex('HelperEvents');

let prevSearchString = '';
let totalPage = 1;
let currentPage = 0;

const resetSearchState = () => {
  prevSearchString = '';
  totalPage = 1;
  currentPage = 0;
};

const finder = async ({
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
    const findedEventsIDs = await index.search(searchString, {
      restrictSearchableAttributes: [searchType],
      attributesToRetrieve: ['objectID'],
      hitsPerPage: count,
      page: currentPage,
    });

    const { nbPages, hits } = findedEventsIDs;
    totalPage = nbPages;
    currentPage += 1;

    return hits.map(result => result.objectID);
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const findByEventsTitle = async ({ searchString = '', count = 0 }) => {
  const eventsIDs = await finder({ type: 'eventsTitles', searchString, count });
  return eventsIDs;
};

export const findByNKOTitle = async ({ searchString = '', count = 0 }) => {
  const eventsIDs = await finder({ type: 'nkoTitle', searchString, count });
  return eventsIDs;
};

export const clearSearchState = () => {
  resetSearchState();
};

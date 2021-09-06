import algoliasearch from 'algoliasearch';

const client = algoliasearch('V9WUY9IQ3K', 'b0042986cdaad3bbf862aed7cbde2026');
const index = client.initIndex('HelperEvents');

let prevSearchString = '';
let totalPage = 1;
let currentPage = 0;

const finder = async ({
  type = 'eventsTitles',
  searchString = '',
  count = 0,
}) => {
  const searchType = type === 'eventsTitles' ? 'title' : 'nko.title';

  if (prevSearchString !== searchString) {
    prevSearchString = searchString;
    totalPage = 1;
    currentPage = 0;
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

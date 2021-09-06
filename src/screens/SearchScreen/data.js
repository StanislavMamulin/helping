import { TYPES_OF_SEARCH } from '../../dataManager/data/typesOfSearch';

export const getPlaceholderByType = type => {
  switch (type) {
    case TYPES_OF_SEARCH.nkoTitle:
      return 'Введите название организации';
    default:
      return 'Введите ключевые слова';
  }
};

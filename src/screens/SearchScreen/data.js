export const getPlaceholderByType = type => {
  switch (type) {
    case 'nkoTitle':
      return 'Введите название организации';
    default:
      return 'Введите ключевые слова';
  }
};

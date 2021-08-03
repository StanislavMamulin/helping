import { format } from 'date-fns';
import formatDistance from 'date-fns/formatDistance';
import { ru } from 'date-fns/locale';

export const capitalize = string => string[0].toUpperCase() + string.slice(1);

export const getDateText = date => {
  const { from, to } = date;

  // конкретная дата
  if (from === to) {
    const formattedDate = format(from, 'LLLL dd, yyyy', { locale: ru });
    return capitalize(formattedDate);
  }

  // период
  const daysLeft = formatDistance(from, to, { locale: ru });
  const dayAndMonth1 = format(from, 'dd.MM');
  const dayAndMonth2 = format(to, 'dd.MM');

  return `Осталось: ${daysLeft} (${dayAndMonth1} - ${dayAndMonth2})`;
};

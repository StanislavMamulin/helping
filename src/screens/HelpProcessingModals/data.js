import { TYPES_OF_HELP_ENUM } from '../../dataManager/data/typesOfHelp';

export const getActionText = helpType =>
  helpType === TYPES_OF_HELP_ENUM.money ? 'ВЫБРАТЬ СУММУ' : 'ОТПРАВИТЬ';

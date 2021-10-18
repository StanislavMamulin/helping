import React from 'react';
import PropTypes from 'prop-types';

import { ItemPhotoAndText } from '../../../../ListItems/ItemPhotoAndText/ItemPhotoAndText';

export const Friend = ({ friendInfo: { avatar, firstName, lastName } }) => (
  <ItemPhotoAndText imageURL={avatar} text={`${firstName} ${lastName}`} />
);

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string,
};

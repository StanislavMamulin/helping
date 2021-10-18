export const facebookUserInfoToUsersCollection = fbUser => {
  const { displayName = '', photoURL, phoneNumber } = fbUser;

  // dislpayName to FirstName, LastName
  const [firstName, lastName = ''] = displayName.split(' ');
  // photoURL to avatar
  // phoneNumber to Phone
  return {
    firstName,
    lastName,
    avatar: photoURL,
    phone: phoneNumber,
  };
};

export const getUserContacts = user => ({
  phone: user.phone ?? null,
  email: user.email ?? null,
  specialization: user.specialization ?? null,
});

export const convertCategoryToEvent = title => {
  const now = Date.now();
  return {
    title,
    date: {
      from: now,
      to: now,
    },
  };
};

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
  phone: user.phone,
  email: user.email,
  specialization: user.specialization,
});

export const FacebookUserInfoToUsersCollection = fbUser => {
  const { displayName = '', email, photoURL, phoneNumber } = fbUser;

  // dislpayName to FirstName, LastName
  const [FirstName, LastName = ''] = displayName.split(' ');
  // email to Email
  // photoURL to avatar
  // phoneNumber to Phone
  return {
    FirstName,
    LastName,
    Email: email,
    avatar: photoURL,
    Phone: phoneNumber,
  };
};

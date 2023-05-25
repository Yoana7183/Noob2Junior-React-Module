import React from 'react';
import PropTypes from 'prop-types';

const PersonalUserInformation = (personalData) => {
  let error;
  const userCredentials = personalData.personalData;
  if (userCredentials.loading == true) {
    error = 'loading';
  }
  return (
    <div>
      <div>
        <div>{error}</div>
        <div>{userCredentials.avatar}</div>
        <div>{userCredentials.name}</div>
        <div>{userCredentials.login}</div>
        <div>{userCredentials.timeStamp}</div>
      </div>
      <div>
        <div>{userCredentials.bio}</div>
      </div>
    </div>
  );
};
PersonalUserInformation.propTypes = {
  personalData: PropTypes.object.isRequired,
};
export default PersonalUserInformation;

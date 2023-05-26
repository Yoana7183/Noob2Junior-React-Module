import React from 'react';
import PropTypes from 'prop-types';

const PersonalUserInformation = ({ ...personalData }) => {
  const userCredentials = personalData.personalData;
  if (
    userCredentials.message == 'Not Found' ||
    userCredentials == undefined ||
    userCredentials == null ||
    userCredentials.error == true
  ) {
    return <div>Hey, there is no such info</div>;
  } else {
    return (
      <div>
        <div>
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
  }
};
PersonalUserInformation.propTypes = {
  personalData: PropTypes.object.isRequired,
};
export default PersonalUserInformation;

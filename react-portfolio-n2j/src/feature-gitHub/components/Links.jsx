import React, { useContext } from 'react';

import { UserDataContext as UserLocation } from '../GitHubFindDev';

const LinksAndLocation = () => {
  const userData = useContext(UserLocation);
  return (
    <div>
      <div>{userData.location}</div>
    </div>
  );
};

export default LinksAndLocation;

import React, { useContext } from 'react';
import { UserDataContext as UserTableInformation } from '../GitHubFindDev';

const TableInformation = () => {
  const userData = useContext(UserTableInformation);
  if (userData.error == true) {
    userData.repos = '';
    userData.followers = '';
    userData.following = '';
  }

  return (
    <div className="flex justify-between">
      <div>
        Repos <div>{userData.repos}</div>
      </div>
      <div>
        Followers <div>{userData.followers}</div>
      </div>
      <div>
        Following <div>{userData.following}</div>
      </div>
    </div>
  );
};

export default TableInformation;

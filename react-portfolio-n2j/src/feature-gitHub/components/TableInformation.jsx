import React, { useContext } from 'react';
import { UserDataContext as UserTableInformation } from '../GitHubFindDev';

const TableInformation = () => {
  const userData = useContext(UserTableInformation);
  if (userData.error == true) {
    return;
  }

  return (
    <div className="flex">
      <div>{userData.repos}</div>
      <div>{userData.followers}</div>
      <div>{userData.following}</div>
    </div>
  );
};

export default TableInformation;

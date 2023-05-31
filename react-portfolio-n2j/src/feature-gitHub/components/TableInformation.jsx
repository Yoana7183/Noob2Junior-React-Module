import React, { useContext } from 'react';
import {
  UserDataContext as UserTableInformation,
  ThemeContext,
} from '../GitHubFindDev';

const TableInformation = () => {
  const userData = useContext(UserTableInformation);
  const initialTheme = useContext(ThemeContext);
  if (userData.error == true) {
    userData.repos = '';
    userData.followers = '';
    userData.following = '';
  }
  const toggleDarkToLightStyleContainers =
    initialTheme === 'dark'
      ? ' bg-gitDarkSpaceBackground text-white'
      : 'bg-gitLightSpaceBackground text-gitTextOnLight ';

  const toggleNumbers =
    initialTheme === 'dark'
      ? '  text-white text-2xl font-bold'
      : ' text-black text-2xl font-bold';

  return (
    <div
      className={`ml-[10rem] w-[480px] h-[85px] px-10 p-3 rounded-2xl flex justify-between ${toggleDarkToLightStyleContainers}`}
    >
      <div className="flex flex-col items-center">
        <div className={toggleDarkToLightStyleContainers}>Repos</div>
        <div className={toggleNumbers}>{userData.repos}</div>
      </div>
      <div className="flex flex-col items-center">
        <div className={toggleDarkToLightStyleContainers}>Followers</div>
        <div className={toggleNumbers}>{userData.followers}</div>
      </div>
      <div className="flex flex-col items-center">
        <div className={toggleDarkToLightStyleContainers}>Following</div>
        <div className={toggleNumbers}>{userData.following}</div>
      </div>
    </div>
  );
};

export default TableInformation;

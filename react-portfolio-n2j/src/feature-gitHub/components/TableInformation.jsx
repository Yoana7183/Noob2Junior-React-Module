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
      ? '  text-white text-2xl font-bold md:text-lg sm:text-lg text-sm'
      : ' text-black text-2xl font-bold md:text-lg sm:text-lg text-sm';

  return (
    <div
      className={`lg:ml-[10rem] text-sm mt-[-1.5rem] md:mt-32 sm:mt-32 md:ml-8 sm:ml-8 :w-[480px] lg:h-[85px] px-10 p-3 rounded-2xl flex justify-between md:text-sm sm:text-sm ${toggleDarkToLightStyleContainers}`}
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

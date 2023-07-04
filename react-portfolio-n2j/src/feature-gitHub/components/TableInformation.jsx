import React, { useContext } from 'react';
import {
  UserDataContext as UserTableInformation,
  ThemeContext,
} from '../GitHubFindDev';

const TableInformation = () => {
  const userData = useContext(UserTableInformation);
  const initialTheme = useContext(ThemeContext);

  const toggleDarkToLightStyleContainers =
    initialTheme === 'dark'
      ? ' bg-gitDarkSpaceBackground text-white sm:text-base text-xs'
      : 'bg-gitLightSpaceBackground text-gitTextOnLight sm:text-base text-xs';

  const toggleNumbers =
    initialTheme === 'dark'
      ? '  text-white text-2xl font-bold md:text-lg sm:text-lg text-sm'
      : ' text-black text-2xl font-bold md:text-lg sm:text-lg text-sm';

  return (
    <section
      className={`border pr-16 border-[#00000033] lg:ml-[10rem] text-sm mt-[-1.5rem] lg:mt-[0.5rem] md:mt-32 sm:mt-32 md:ml-8 sm:ml-8 lg:w-[480px] lg:h-[85px] px-10 p-3 rounded-2xl flex justify-between md:text-sm sm:text-sm ${toggleDarkToLightStyleContainers}`}
    >
      <div className="flex flex-col items-center">
        <div className={toggleDarkToLightStyleContainers}>Repos</div>
        <div className={`  pr-0 sm:pr-8 ${toggleNumbers}`}>
          {userData.repos}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className={toggleDarkToLightStyleContainers}>Followers</div>
        <div className={toggleNumbers}>{userData.followers}</div>
      </div>
      <div className="flex flex-col items-center">
        <div className={toggleDarkToLightStyleContainers}>Following</div>
        <div className={`  pr-0 sm:pr-10 ${toggleNumbers}`}>
          {userData.following}
        </div>
      </div>
    </section>
  );
};

export default TableInformation;

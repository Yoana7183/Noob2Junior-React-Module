import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const TableInformation = () => {
  const { userData, theme } = useContext(DataContext);
  const tableUserInfo = [
    [1, 'Repos', userData.repos],
    [2, 'Followers', userData.followers],
    [3, 'Following', userData.following],
  ];
  const toggleDarkToLightStyleContainers =
    theme === 'dark'
      ? ' bg-gitDarkSpaceBackground text-white sm:text-base text-xs'
      : 'bg-gitLightSpaceBackground text-gitTextOnLight sm:text-base text-xs';

  const toggleNumbers =
    theme === 'dark'
      ? '  text-white text-2xl font-bold md:text-lg sm:text-lg text-sm'
      : ' text-black text-2xl font-bold md:text-lg sm:text-lg text-sm';

  return (
    <section
      className={`border pr-16 border-[#00000033] lg:ml-[10rem] text-sm mt-[-1.5rem] lg:mt-[0.5rem] md:mt-32 sm:mt-32 md:ml-8 sm:ml-8 lg:w-[480px] lg:h-[85px] px-10 p-3 rounded-2xl flex justify-between md:text-sm sm:text-sm ${toggleDarkToLightStyleContainers}`}
    >
      {tableUserInfo.map((tableInfo) => {
        return (
          <div key={tableInfo[0]}>
            <p className="flex flex-col items-center">{tableInfo[1]}</p>
            <div className={`  pr-0 sm:pr-8 ${toggleNumbers}`}>
              {tableInfo[2]}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default TableInformation;

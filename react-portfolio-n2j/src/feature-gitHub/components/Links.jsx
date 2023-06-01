import React, { useContext } from 'react';

import { UserDataContext as UserLocation } from '../GitHubFindDev';

const LinksAndLocation = () => {
  const userData = useContext(UserLocation);
  const linksContainerStyle = ` flex w-[240px] h-[22px]  lg:text-base md:text-sm sm:text-sm text-xs pl-2 mt-3 sm:mt-0`;
  return (
    <div className="lg:ml-[10rem]  mt-6  md:ml-8 sm:ml-8 sm:grid grid-cols-2 sm:gap-5">
      <div className={linksContainerStyle}>
        <img
          src="src/feature-gitHub/assets/icon-location.svg"
          alt=""
          srcSet=""
        />
        <div className="pl-3">{userData.location}</div>
      </div>
      <div className={` text-slate-300 ${linksContainerStyle}`}>
        <div className=" text-slate-300 opacity-20">
          <img
            src="src/feature-gitHub/assets/icon-twitter.svg"
            alt=""
            srcSet=""
          />
        </div>
        <div className="ml-3 text-grey-200  ">Not available</div>
      </div>

      <div className={linksContainerStyle}>
        <img
          src="src/feature-gitHub/assets/icon-website.svg"
          alt=""
          srcSet=""
        />
        <div className="pl-2">
          <a
            href="https://github.blog"
            target="_blank"
            rel="https://github.blog noreferrer"
          >
            https://github.blog
          </a>
        </div>
      </div>
      <div className={linksContainerStyle}>
        <img
          src="src/feature-gitHub/assets/icon-company.svg"
          alt=""
          srcSet=""
        />
        <div className="ml-3">@github</div>
      </div>
    </div>
  );
};

export default LinksAndLocation;

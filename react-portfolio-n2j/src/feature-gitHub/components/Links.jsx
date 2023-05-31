import React, { useContext } from 'react';

import { UserDataContext as UserLocation } from '../GitHubFindDev';

const LinksAndLocation = () => {
  const userData = useContext(UserLocation);
  return (
    <div className="ml-[10rem] mt-6">
      <div className="flex justify-between pb-5">
        <div className=" flex w-[240px] h-[22px]">
          <img
            src="src/feature-gitHub/assets/icon-location.svg"
            alt=""
            srcSet=""
          />
          <div className="pl-3">{userData.location}</div>
        </div>
        <div className="flex w-[240px] h-[22px]">
          <img
            src="src/feature-gitHub/assets/icon-twitter.svg"
            alt=""
            srcSet=""
          />
          <div className="ml-3">Not available</div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className=" flex w-[240px] h-[22px]">
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
        <div className="flex w-[240px] h-[22px]">
          <img
            src="src/feature-gitHub/assets/icon-company.svg"
            alt=""
            srcSet=""
          />
          <div className="ml-3">@github</div>
        </div>
      </div>
    </div>
  );
};

export default LinksAndLocation;

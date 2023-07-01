import React, { useContext } from 'react';
import { DataContext as UserLocation } from '../context/DataContext.jsx';
const LinksAndLocation = () => {
  const userData = useContext(UserLocation);
  const linksContainerStyle = ` flex  h-[22px]  lg:text-base md:text-sm sm:text-sm text-xs pl-2 mt-3 sm:mt-0  sm:border-1 sm:border-white  sm:hover:border-b-[1px] sm:hover:border-black`;
  return (
    <section className="lg:ml-[10rem]  mt-6  md:ml-8 sm:ml-8 sm:grid grid-cols-2 sm:gap-5">
      <div className={`sm:w-[185px] lg:w-[200px] ${linksContainerStyle}`}>
        <img
          src="src/feature-gitHub/assets/icon-location.svg"
          alt="location-icon"
          srcSet=""
        />
        <div className="pl-3">{userData.location}</div>
      </div>
      <div
        className={` text-slate-300  sm:w-[147px] lg:w-[160px] ${linksContainerStyle}`}
      >
        <figure className=" text-slate-300 opacity-20">
          <img
            src="src/feature-gitHub/assets/icon-twitter.svg"
            alt="twitter-icon"
            srcSet=""
          />
        </figure>
        <figcaption className="ml-3 text-grey-200  ">Not available</figcaption>
      </div>

      <figure className={`sm:w-[190px] lg:w-[210px] ${linksContainerStyle}`}>
        <img
          src="src/feature-gitHub/assets/icon-website.svg"
          alt="website-icon"
          srcSet=""
        />
        <figcaption className="pl-2">
          <a
            href="https://github.blog"
            target="_blank"
            rel="https://github.blog noreferrer"
          >
            https://github.blog
          </a>
        </figcaption>
      </figure>
      <figure className={`sm:w-[100px]  lg:w-[115px]${linksContainerStyle}`}>
        <img
          src="src/feature-gitHub/assets/icon-company.svg"
          alt="company-icon"
          srcSet=""
        />
        <figcaption className="ml-3">@github</figcaption>
      </figure>
    </section>
  );
};

export default LinksAndLocation;

import React from 'react';
import { jobPositions } from '../jobPosition';
const Experience = () => {
  const nameOfPositionStyle = `sm:text-xl text-lg font-bold mb-1`;
  const nameOfCompanyStyle = `mr-5 font-bold text-base sm:text-md text-sky-500 tracking-tight`;
  const period = ` text-slate-500 text-[10px] sm:text-[11px] pr-3`;
  const icon = `sm:w-5 sm:h-5 w-3 h-3 mb-2 mt-2 sm:ml-[-10px] sm:mr-[5px] mt-[1px] sm:mt-[-1px] `;
  const link = ` text-slate-500 sm:text-xs text-[8px]`;
  return (
    <section className="  sm:mt-[4rem]">
      <h1 className="border-b-4 border-slate-500 pb-2 font-bold text-slate-500 mx-2 shadow-lg">
        EXPERIENCE
      </h1>
      <div className="flex flex-col mx-5">
        {jobPositions.map((position) => (
          <div key={position.id} className="mt-3">
            <div className="flex flex-col items-start mb-2">
              <h1 className={nameOfPositionStyle}>{position.position}</h1>
              <div className="flex flex-col">
                <h2 className={nameOfCompanyStyle}>{position.company}</h2>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-row  sm:mx-2">
                <img
                  src="/assetsCv/calendar.png"
                  alt="Calendar Icon"
                  className={`${icon} `}
                />
                <p className={period}>{position.date}</p>
              </div>
              <div className="flex flex-row ">
                <img
                  src="/assetsCv/location.png"
                  alt="Location Icon"
                  className={`${icon} mt-[2px] sm:mt-[-2px]`}
                />
                <p className={period}>{position.location}</p>
              </div>
            </div>
            <div className="flex flex-row mx-2">
              <img
                src="/assetsCv/link.png"
                alt="Link Icon"
                className={`${icon} mt-[-3px] sm:mt-[1px]`}
              />
              <a className={link} href={position.link}>
                {position.link}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Experience;

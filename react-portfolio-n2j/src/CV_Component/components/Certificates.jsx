import React from 'react';
import { certificates } from '../certificates';

const Certificates = () => {
  return (
    <div>
      <h1 className=" border-b-4 border-slate-500 pb-2 font-bold text-slate-500 mx-2 shadow-lg mt-10 sm:mt-[4rem]">
        CERTIFICATES
      </h1>
      <div className="flex flex-wrap mx-5 mt-5">
        {certificates.map((certificateInfo) => {
          return (
            <div
              key={Math.random()}
              className="mr-4 border-b-2 border-slate-300 pb-1 text-sm pl-1 pt-2 shadow-sm"
            >
              <div className="flex flex-row">
                <img
                  src="src/CV_Component/img/certificate.png"
                  alt="Phone Icon"
                  className="sm:w-7 sm:h-7 w-5 h-5 mr-2 mt-1"
                />
                <h1 className="sm:text-xl text-lg font-bold mb-1">
                  {certificateInfo.name}
                </h1>
              </div>
              <p className="font-base text-slate-500 font-light mb-5">
                - {certificateInfo.certifiedBy}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certificates;

import React from 'react';

const Education = () => {
  return (
    <div className="mt-[3rem]">
      <div className="">
        <h1 className=" border-b-4 border-slate-500 pb-2 font-bold text-slate-500 mx-2 shadow-lg mb-3">
          EDUCATION
        </h1>
        <div className="flex flex-wrap mx-5">
          <div className="mb-2">
            <h1 className="text-xl font-bold ">Marketing</h1>
            <h2 className="font-bold text-sky-500 tracking-tight mb-1">
              UNWE Sofia - Remote
            </h2>
            <div className="flex flex-row mx-2">
              <img
                src="src/CV_Component/img/calendar.png"
                alt="Phone Icon"
                className="w-3 h-3 mt-[1px] "
              />
              <p className=" text-slate-500 text-[11px]">10/2020 - Ongoing</p>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold ">Obstetrics</h1>
            <h2 className="font-bold text-sky-500 tracking-tight mb-1">
              Medical University - Sofia
            </h2>
            <div className="flex flex-row mx-2">
              <img
                src="src/CV_Component/img/calendar.png"
                alt="Phone Icon"
                className="w-3 h-3 mt-[1px] "
              />
              <p className=" text-slate-500 text-[11px]">10/2016 - 08/2019</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

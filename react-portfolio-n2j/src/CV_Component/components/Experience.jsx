import React from 'react';

const Experience = () => {
  return (
    <section className="mt-10">
      <h1 className=" border-b-4 border-slate-500 pb-2 font-bold text-slate-500 mx-2 shadow-lg">
        EXPERIENCE
      </h1>
      <div className="flex flex-wrap mx-5">
        <div className="mt-3">
          <h1 className="text-xl font-bold mb-1">
            Javascript / ReactJS Developer
            <span className="underline  text-sky-500 ml-2">Intership</span>
          </h1>
          <div className="flex flex-row mb-2">
            <h2 className="mr-5 font-bold text-sky-500 tracking-tight">
              Noob2Junior - Dev Academy
            </h2>
            <div className="flex flex-row mt-1">
              <div className="flex flex-row mx-2">
                <img
                  src="src/CV_Component/img/calendar.png"
                  alt="Phone Icon"
                  className="w-3 h-3 mt-[1px] "
                />
                <p className=" text-slate-500 text-[11px]">02/2023 - 08/2023</p>
              </div>

              <div className="flex flex-row mx-2">
                <img
                  src="src/CV_Component/img/location.png"
                  alt="Phone Icon"
                  className="w-3 h-3 mt-[1px] "
                />
                <p className=" text-slate-500 text-[11px]">Sofia, Bulgaria</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row mx-2">
            <img
              src="src/CV_Component/img/link.png"
              alt="Phone Icon"
              className="w-5 h-5 mt-[-2px] "
            />
            <a
              className=" text-slate-500 text-xs"
              href="https://www.linkedin.com/company/noob2junior-devacademy/"
            >
              https://www.linkedin.com/company/noob2junior-devacademy/
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mx-5">
        <div className="mt-3">
          <h1 className="text-xl font-bold mb-1">System Analyst</h1>
          <div className="flex flex-row">
            <h2 className="mr-[9rem] font-bold text-sky-500 tracking-tight ">
              CloudBM
            </h2>
            <div className="flex flex-row mt-2">
              <div className="flex flex-row mx-2">
                <img
                  src="src/CV_Component/img/calendar.png"
                  alt="Phone Icon"
                  className="w-3 h-3 mt-[1px] "
                />
                <p className=" text-slate-500 text-[11px]">08/2020 - Ongoing</p>
              </div>

              <div className="flex flex-row mx-2">
                <img
                  src="src/CV_Component/img/location.png"
                  alt="Phone Icon"
                  className="w-3 h-3 mt-[1px] "
                />
                <p className=" text-slate-500 text-[11px]">Sofia, Bulgaria</p>
              </div>
            </div>
          </div>

          <div className="flex flex-row mx-2 mt-1">
            <img
              src="src/CV_Component/img/link.png"
              alt="Phone Icon"
              className="w-5 h-5 mt-[-2px] "
            />
            <a className=" text-slate-500 text-xs" href="https://cloudbm.com/">
              https://cloudbm.com/
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mx-5">
        <div className="mt-3">
          <h1 className="text-xl font-bold mb-1">Healthcare Provider</h1>
          <div className="flex flex-row">
            <h2 className="mr-[1.1rem] font-bold text-sky-500 tracking-tight">
              Acibadem City Clinic Tokuda
            </h2>
            <div className="flex flex-row mt-1">
              <div className="flex flex-row mx-2">
                <img
                  src="src/CV_Component/img/calendar.png"
                  alt="Phone Icon"
                  className="w-3 h-3 mt-[1px] "
                />
                <p className=" text-slate-500 text-[11px]">04/2018 - 08/2019</p>
              </div>

              <div className="flex flex-row mx-2">
                <img
                  src="src/CV_Component/img/location.png"
                  alt="Phone Icon"
                  className="w-3 h-3 mt-[1px] "
                />
                <p className=" text-slate-500 text-[11px]">Sofia, Bulgaria</p>
              </div>
            </div>
          </div>

          <div className="flex flex-row mx-2 mt-1">
            <img
              src="src/CV_Component/img/link.png"
              alt="Phone Icon"
              className="w-5 h-5 mt-[-2px] "
            />
            <a
              className=" text-slate-500 text-xs"
              href="https://acibademcityclinic.bg/tokuda/medicinski-deinosti/detaili/akusherstvo-i-ginecologiya"
            >
              https://acibademcityclinic.bg/tokuda/medicinski-deinosti/detaili/akusherstvo-i-ginecologiya
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

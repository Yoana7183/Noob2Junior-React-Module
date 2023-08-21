import React from 'react';
import PersonalDetails from './PersonalDetails';

const Header = () => {
  return (
    <div className="p-5 font-serif md:mt-[4rem] flex justify-center flex-col">
      <div className="flex md:justify-between  flex-col sm:flex-row sm:px-10 lg:px-36 md:px-16 sm:ml-[3rem] md:mb-[-2rem] lg:mb-[2rem] md:border-none md:shadow-none border-b border-slate-500 font-bold mx-2 shadow-sm sm:pb-[4rem] md:pb-[2rem] px-0 pb-[3rem] sm:mt-10 ">
        <div className="mt-10 flex justify-center sm:block">
          <div className="sm:mr-5 mr-0">
            <h1 className="sm:text-4xl text-3xl tracking-tight md:mb-6 pb-5 sm:pb-5 md:pb-2">
              Yoana Nakova
            </h1>
            <h2 className="sm:text-2xl text-xl text-sky-500 tracking-tight md:ml-[1.2rem] ml-4 pb-5">
              React JS Developer
            </h2>
          </div>
        </div>
        <div className=" flex items-center justify-center md:block">
          <div className="">
            <img
              src="/src/CV_Component/img/myImg.jpg"
              alt=""
              srcSet=""
              className="w-[10rem] border-2 rounded-3xl border-gray-300 transition duration-300 hover:border-sky-500 hover:shadow-2xl"
            />
          </div>
        </div>
      </div>
      <PersonalDetails />
    </div>
  );
};

export default Header;

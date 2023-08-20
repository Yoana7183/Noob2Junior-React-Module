import React from 'react';
import PersonalDetails from './PersonalDetails';

const Header = () => {
  return (
    <div className="p-5 font-serif md:mt-[4rem]">
      <div className="flex md:justify-between px-16 ml-[3rem] mb-[2rem]">
        <div className="mt-10 ">
          <div>
            <h1 className="lg:text-4xl tracking-tight md:mb-6">Yoana Nakova</h1>
            <h2 className="lg:text-2xl text-sky-500 tracking-tight md:ml-[1.2rem]">
              React JS Developer
            </h2>
          </div>
        </div>
        <div className="w-[10rem] md:mr-[3rem] mr-0 flex  md:block   ">
          <img
            src="/src/CV_Component/img/myImg.jpg"
            alt=""
            srcSet=""
            className="w-[10rem] border-2 rounded-3xl border-gray-300 transition duration-300 hover:border-sky-500  hover:shadow-2xl"
          />
        </div>
      </div>
      <PersonalDetails />
    </div>
  );
};

export default Header;

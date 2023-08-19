import React from 'react';
import PersonalDetails from './PersonalDetails';

const Header = () => {
  return (
    <div className="p-5 font-serif mt-[-16rem]">
      <div className="flex justify-between px-16">
        <div className="mt-10">
          <h1 className="lg:text-4xl tracking-tight mb-10">Yoana Nakova</h1>
          <h2 className="lg:text-2xl text-sky-500 tracking-tight">
            Javascript ReactJS Developer
          </h2>
        </div>
        <div className="w-[10rem]  flex justify-end">
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

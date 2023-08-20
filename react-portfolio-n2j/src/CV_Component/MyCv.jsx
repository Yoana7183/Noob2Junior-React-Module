import React from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Experience from './components/Experience';
const MyCv = () => {
  return (
    <main className="flex justify-center  h-screen mt-[5rem] font-serif ">
      <div className="flex justify-center border border-sky-500 rounded-2xl shadow-2xl flex-col w-[890px] ">
        <Header />
        <div className="flex px-16 mt-5">
          <div className="w-[60%]">
            <Summary />
            <Experience />
          </div>
          <div className="w-[40%]">
            <Skills />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyCv;

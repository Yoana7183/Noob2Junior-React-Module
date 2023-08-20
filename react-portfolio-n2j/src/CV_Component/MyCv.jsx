import React from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import ProgrammingEducation from './components/ProgrammingEducation';
import Languages from './components/Languages';
import Certificates from './components/Certificates';
const MyCv = () => {
  return (
    <main className="flex justify-center  h-screen mt-[5rem] font-serif ">
      <div className="flex justify-center border border-sky-500 rounded-2xl shadow-2xl flex-col h-max w-[890px] mb-16 pb-36 ">
        <Header />
        <div className="flex px-16 mt-5">
          <div className="w-[60%]">
            <Summary />
            <Experience />
            <ProgrammingEducation />
          </div>
          <div className="w-[40%]">
            <Skills />
            <Education />
            <Languages />
            <Certificates />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyCv;

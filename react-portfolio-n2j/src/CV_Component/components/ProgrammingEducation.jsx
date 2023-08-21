import React from 'react';
import { coursesAndSkills } from '../programmingEducation';

const ProgrammingEducation = () => {
  return (
    <section>
      <div className="mt-10 sm:mt-[4rem]">
        <h1 className=" border-b-4 border-slate-500 pb-2 font-bold text-slate-500 mx-2 shadow-lg">
          PROGRAMMING EDUCATION
        </h1>
        <div className="flex flex-wrap mx-5 mt-2">
          {coursesAndSkills.map((info) => {
            return (
              <div
                key={Math.random()}
                className="mr-4 border-b-2 border-slate-300 pb-1 text-sm pl-1 pt-2 shadow-sm"
              >
                <h1 className="sm:text-xl text-lg font-bold mb-1 mt-2 flex flex-row ">
                  <img
                    src="../../assets/img_cv/book.png"
                    alt="Phone Icon"
                    className="sm:w-7 sm:h-7 w-5 h-5 mr-2 mt-1"
                  />
                  {info.courseName}
                </h1>
                <div className="mb-5">
                  <h1 className="font-bold text-base sm:text-md text-sky-500 tracking-tight mb-3 mt-3">
                    Main course topics:
                  </h1>
                  <ul className="font-base text-slate-500 font-light">
                    {info.skills.map((skill) => (
                      <li className="mb-1" key={skill.id}>
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgrammingEducation;

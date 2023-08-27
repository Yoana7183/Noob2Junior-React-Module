import React from 'react';
import { skills } from '../skills';
const Skills = () => {
  return (
    <div className="mt-10 sm:mt-[4rem]">
      <h1 className=" border-b-4 border-slate-500 pb-2 font-bold text-slate-500 mx-2 shadow-lg">
        SKILLS
      </h1>
      <div className="flex flex-wrap mx-5">
        {skills.map((skill) => {
          return (
            <div
              key={skill.id}
              className="mr-4 border-b-2 border-slate-300 hover:border-sky-500 pb-1 text-sm pl-1 pt-2 cursor-pointer shadow-sm transition duration-300 ease-in-out delay-200"
            >
              <p className="tracking-tight text-slate-600">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;

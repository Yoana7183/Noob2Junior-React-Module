import React from 'react';

const Skills = () => {
  const skills = [
    'JavaScript',
    'OOP',
    'Data Structures',
    'Design Patterns',
    'HTTP Protocol',
    'ReactJS',
  ];
  return (
    <div>
      <h1 className=" border-b-4 border-slate-500 pb-2 font-bold text-slate-500 mx-2 shadow-lg">
        SKILLS
      </h1>
      <div className="flex flex-wrap mx-5">
        {skills.map((skill) => {
          return (
            <div
              key={Math.random()}
              className="mr-4 border-b-2 border-slate-300 pb-1 text-sm pl-1 pt-2 shadow-sm"
            >
              {skill}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;

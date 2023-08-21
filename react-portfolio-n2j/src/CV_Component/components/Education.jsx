import React from 'react';
const educationData = [
  {
    id: 1,
    title: 'Marketing',
    institution: 'UNWE Sofia - Remote',
    date: '10/2020 - Ongoing',
  },
  {
    id: 2,
    title: 'Obstetrics',
    institution: 'Medical University - Sofia',
    date: '10/2016 - 08/2019',
  },
];
const Education = () => {
  const period = ` text-slate-500 text-[10px] sm:text-[11px] px-1`;
  const icon = `sm:w-5 sm:h-5 w-3 h-3 mb-2 mt-2 sm:ml-[-10px] sm:mr-[5px] mt-[1px] sm:mt-[-4px] `;
  return (
    <div className="mt-10 sm:mt-[4rem]">
      <div className="">
        <h1 className="border-b-4 border-slate-500 pb-2 font-bold text-slate-500 mx-2 shadow-lg mb-3">
          EDUCATION
        </h1>
        <div className="flex flex-col mx-5">
          {educationData.map((education) => (
            <div key={education.id} className="mb-4">
              <h1 className="sm:text-xl text-lg font-bold">
                {education.title}
              </h1>
              <h2 className="font-bold text-base sm:text-md text-sky-500 tracking-tight mb-1">
                {education.institution}
              </h2>
              <div className="flex flex-row mx-2">
                <img
                  src="src/CV_Component/img/calendar.png"
                  alt="Phone Icon"
                  className={icon}
                />
                <p className={period}>{education.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;

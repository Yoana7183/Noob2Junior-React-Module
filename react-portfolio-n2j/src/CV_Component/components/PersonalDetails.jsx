import React from 'react';

const PersonalDetails = () => {
  return (
    <>
      <section className="flex flex-row mt-5 px-16">
        <div className="flex flex-row mx-2">
          <img
            src="src/CV_Component/img/phone.png"
            alt="Phone Icon"
            className="w-5 h-5 "
          />
          <a className=" text-slate-500" href="tel:+359 886793109">
            +359 886793109
          </a>
        </div>

        <div className="flex flex-row mx-2">
          <img
            src="src/CV_Component/img/mail.png"
            alt="Phone Icon"
            className="w-5 h-5 "
          />
          <a className=" text-slate-500" href="mailto: yoana.nakova@yahoo.com">
            yoana.nakova@yahoo.com
          </a>
        </div>
        <div className="flex flex-row mx-2">
          <img
            src="src/CV_Component/img/link.png"
            alt="Phone Icon"
            className="w-5 h-5 mt-[3px] "
          />
          <a className=" text-slate-500" href="https://github.com/Yoana7183">
            https://github.com/Yoana7183
          </a>
        </div>
        <div className="flex flex-row mx-2">
          <img
            src="src/CV_Component/img/location.png"
            alt="Phone Icon"
            className="w-5 h-5 mt-[3px] "
          />
          <p className=" text-slate-500">Sofia, Bulgaria</p>
        </div>
      </section>
    </>
  );
};

export default PersonalDetails;

import React from 'react';

const PersonalDetails = () => {
  const divStyle = `flex flex-row mx-2 pb-2 sm:pb-0`;
  const textStyle = ` text-slate-500 text-xs sm:text-base pl-2 lg:pl-0`;
  return (
    <>
      <section className="flex lg:flex-row flex-col mt-5 px-5 sm:px-10 md:px-16">
        <div className={divStyle}>
          <img
            src="src/CV_Component/img/phone.png"
            alt="Phone Icon"
            className="w-5 h-5 "
          />
          <a className={textStyle} href="tel:+359 886793109">
            +359 886793109
          </a>
        </div>

        <div className={divStyle}>
          <img
            src="src/CV_Component/img/mail.png"
            alt="Phone Icon"
            className="w-5 h-5 "
          />
          <a className={textStyle} href="mailto: yoana.nakova@yahoo.com">
            yoana.nakova@yahoo.com
          </a>
        </div>
        <div className={divStyle}>
          <img
            src="src/CV_Component/img/link.png"
            alt="Phone Icon"
            className="w-5 h-5 mt-[3px] "
          />
          <a className={textStyle} href="https://github.com/Yoana7183">
            https://github.com/Yoana7183
          </a>
        </div>
        <div className={divStyle}>
          <img
            src="src/CV_Component/img/location.png"
            alt="Phone Icon"
            className="w-5 h-5 mt-[3px] "
          />
          <p className={textStyle}>Sofia, Bulgaria</p>
        </div>
      </section>
    </>
  );
};

export default PersonalDetails;

import React from 'react';

const PersonalDetails = () => {
  const divStyle = `flex flex-row mx-2 pb-2 lg:pb-0`;
  const textStyle = ` text-slate-500 text-xs sm:text-[14px] ml-3 lg:ml-0`;
  const iconStyle = `w-5 h-5 lg:mt-[-3px]`;
  return (
    <>
      <section className="mt-10 sm:mt-[1rem] flex lg:flex-row flex-col px-5 sm:px-10 md:px-16">
        <div className={divStyle}>
          <img
            src="/assetsCv/phone.png"
            alt="Phone Icon"
            className={iconStyle}
          />
          <a className={textStyle} target="a_blank" href="tel:+359 886793109">
            +359 88 679 3109
          </a>
        </div>

        <div className={divStyle}>
          <img
            src="/assetsCv/mail.png"
            alt="Phone Icon"
            className={iconStyle}
          />
          <a
            className={textStyle}
            target="a_blank"
            href="mailto: yoana.nakova@yahoo.com"
          >
            yoana.nakova@yahoo.com
          </a>
        </div>
        <div className={divStyle}>
          <img
            src="/assetsCv/link.png"
            alt="Phone Icon"
            className={iconStyle}
          />
          <a
            className={textStyle}
            target="a_blank"
            href="https://github.com/Yoana7183"
          >
            https://github.com/Yoana7183
          </a>
        </div>
        <div className={divStyle}>
          <img
            src="/assetsCv/location.png"
            alt="Phone Icon"
            className={iconStyle}
          />
          <p className={textStyle}>Sofia, Bulgaria</p>
        </div>
      </section>
    </>
  );
};

export default PersonalDetails;

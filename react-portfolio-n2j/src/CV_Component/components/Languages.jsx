import React from 'react';

const Languages = () => {
  return (
    <section>
      <div>
        <h1 className=" border-b-4 border-slate-500 pb-2 font-bold text-slate-500 mx-2 shadow-lg mt-10">
          LANGUAGES
        </h1>
        <div className="flex flex-wrap mx-5 mt-3">
          <div>
            <p className="text-xl font-bold mb-1">English B2 </p>
            <div className="flex ">
              <p className="font-bold text-sky-500 tracking-tight ">Advanced</p>
              <div className="flex items-center ml-[7rem]">
                <div className="w-[12px] h-3 rounded-full bg-black mx-[1px]"></div>
                <div className="w-[12px] h-3 rounded-full bg-black mx-[1px]"></div>
                <div className="w-[12px] h-3 rounded-full bg-black mx-[1px]"></div>
                <div className="flex items-center  mx-[1px]">
                  <div className="w-[6px] h-3 rounded-l-full bg-black "></div>
                  <div className="w-[6px] h-3 rounded-r-full bg-sky-300"></div>
                </div>
                <div className="w-[12px] h-3 rounded-full bg-sky-300 mx-[1px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;

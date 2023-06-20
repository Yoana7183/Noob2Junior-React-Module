import LeftPart from './components/LeftPart';
import RightPart from './components/RightPart';
import React, { createContext, useEffect, useState } from 'react';

export const TipsContext = createContext();
const initialState = {
  bill: 0,
  tip: 0,
  people: 0,
};

const TipsCalculator = () => {
  const [inputsInObject, setinputsInObject] = useState(initialState);
  const [totalBill, setTotalBill] = useState(0);
  const [tipByPerson, setTipByPerson] = useState(0);

  useEffect(() => {
    let total = (inputsInObject.bill * inputsInObject.tip) / 100;
    setTotalBill(total);

    let titByPer = total / inputsInObject.people;
    setTipByPerson(titByPer);
  }, [inputsInObject]);

  return (
    <div className="bg-teal-50 w-[100%] h-[100%]  lg:h-[70rem]  md:h-[100rem] m-0 font-mono">
      <div className="flex flex-cols-1 pt-10 justify-center lg:pt-16 sm:pt-10">
        <div>
          <div className="text-4xl  text-buttonOfCalculatorAndRightSideBackground">
            SPLI
          </div>
          <div className="text-4xl  text-buttonOfCalculatorAndRightSideBackground">
            TTER
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-10 ">
        <div className="flex rounded-3xl shadow-2xl h-[60rem] sm:h-[75rem]  lg:w-[920px]  lg:h-[481px] sm:mt-16 bg-white lg:mt-36 lg:p-6 sm:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <TipsContext.Provider value={{ inputsInObject, setinputsInObject }}>
              <div className=" ">
                <LeftPart />
              </div>
              <div className="">
                <RightPart total={totalBill} byPerson={tipByPerson} />
              </div>
            </TipsContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TipsCalculator;

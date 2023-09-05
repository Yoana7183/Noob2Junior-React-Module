import LeftPart from './components/LeftPart';
import RightPart from './components/RightPart';
import React, { useContext, useEffect, useState, useRef } from 'react';
import { TipsCalculatorContext } from './context/TipsCalculatorContext-file';
import ModalHistoryResults from './components/ModalHistoryResults';
const TipsCalculator = () => {
  const { inputsInObject } = useContext(TipsCalculatorContext);
  const [totalBill, setTotalBill] = useState(0);
  const [tipByPerson, setTipByPerson] = useState(0);
  const contentRef = useRef(null);
  useEffect(() => {
    contentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    let total = (inputsInObject.bill * inputsInObject.tip) / 100;
    setTotalBill(total);

    let titByPer = total / inputsInObject.people;
    setTipByPerson(titByPer);
  }, [inputsInObject]);

  return (
    <main ref={contentRef} className=" h-screen  bg-teal-50 overflow-y-auto">
      <div className=" m-0 font-mono">
        <div className="flex flex-cols-1 pt-10 justify-center  lg:pt-16 sm:pt-10">
          <header>
            <div className="text-4xl  text-buttonOfCalculatorAndRightSideBackground">
              SPLI
            </div>
            <div className="text-4xl  text-buttonOfCalculatorAndRightSideBackground">
              TTER
            </div>
          </header>
        </div>
        <div className="flex justify-center pt-10 mb-[25%] ">
          <div className="flex rounded-3xl shadow-2xl h-[60rem] sm:h-[75rem]  lg:w-[920px] lg:h-[481px] sm:mt-16 bg-white lg:mt-36 lg:p-6 sm:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className=" ">
                <LeftPart />
              </div>
              <div className="">
                <RightPart total={totalBill} byPerson={tipByPerson} />
              </div>
            </div>
          </div>
          <ModalHistoryResults />
        </div>
      </div>
    </main>
  );
};
export default TipsCalculator;

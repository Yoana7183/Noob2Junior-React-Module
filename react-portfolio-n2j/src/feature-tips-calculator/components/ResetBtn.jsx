import { useContext } from 'react';

import { TipsCalculatorContext } from '../context/TipsCalculatorContext-file';
const ResetBtn = () => {
  const { resetContext } = useContext(TipsCalculatorContext);

  return (
    <div className="lg:pt-[5rem] sm:pt-[4rem] pt-[4rem]">
      <button
        className="bg-hoverbuttonOfCalculatorAndRightSideBackground hover:bg-teal-50 h-[48px] w-[100%] lg:h-[48px] text-2xl rounded-md text-center sm:h-[70px]"
        onClick={() => resetContext()}
      >
        RESET
      </button>
    </div>
  );
};

export default ResetBtn;

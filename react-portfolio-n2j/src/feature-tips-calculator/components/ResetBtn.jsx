import { useContext } from 'react';
import { TipsContext as ClearContext } from '../Tips_Calculator';

const ResetBtn = () => {
  const { inputsInObject, setinputsInObject } = useContext(ClearContext);
  const handleButtonClickClearContext = () => {
    setinputsInObject(() => ({ bill: 0, tip: 0, people: 0 }));
    inputsInObject;
  };
  return (
    <div className="pt-[5rem]">
      <button
        className="bg-hoverbuttonOfCalculatorAndRightSideBackground w-[100%] h-[48px] text-2xl text-center"
        onClick={() => handleButtonClickClearContext()}
      >
        RESET
      </button>
    </div>
  );
};

export default ResetBtn;

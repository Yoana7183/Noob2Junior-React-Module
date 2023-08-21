import { useState } from 'react';

import useValidateNumberInput from '../hooks/useValidateNumberInput';

const InputPeople = () => {
  const [error, setError] = useState('');
  const [people, setPeople] = useState(0);

  const handleClick = (event) => {
    setPeople(event.target.value.trim());
  };
  // custom hook for validation on input, and if is valid will update the context
  const validInput = useValidateNumberInput(setError, people, setPeople, [
    'people',
  ]);

  let value = people == 0 ? '' : validInput;
  return (
    <>
      <div className="flex justify-between">
        <p className="text-buttonOfCalculatorAndRightSideBackground font-bold">
          Number of People
        </p>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </div>
      <div className="pt-2">
        <div className="relative">
          <img
            className="w-[25px] h-[16px] absolute inset-y-4 left-0 flex items-center pl-3 "
            src="\assetsTipsCalc\icon-person.svg"
            alt="icon-person"
            srcSet=""
          />

          <input
            inputMode="numeric"
            className=" bg-teal-50 rounded-md h-[48px] w-[100%] lg:h-[48px] text-2xl text-right pr-4 sm:h-[70px]"
            type="text"
            id="people"
            name="people"
            value={value}
            onChange={handleClick}
          />
        </div>
      </div>
    </>
  );
};

export default InputPeople;

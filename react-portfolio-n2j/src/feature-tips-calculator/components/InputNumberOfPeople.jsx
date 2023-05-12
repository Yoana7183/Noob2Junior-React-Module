import { useContext, useEffect, useState } from 'react';
import { TipsContext as PeopleContext } from '../Tips_Calculator';

const Input = () => {
  const { inputsInObject, setinputsInObject } = useContext(PeopleContext);
  const [error, setError] = useState('');

  useEffect(() => {
    if (inputsInObject.people === 0) {
      inputsInObject.people = '';
      setError('');
    }
    if (inputsInObject.people === 1) {
      inputsInObject.people = '';
      setError('');
    }
  }, [inputsInObject]);

  const handleClick = (event) => {
    const numberOfPeople = event.target.value;

    setinputsInObject((prev) => ({ ...prev, people: numberOfPeople }));
    if (isNaN(numberOfPeople)) {
      setError(`Please enter a number`);
    } else if (numberOfPeople < 0) {
      setError(`Can/'t be zero`);
    } else {
      setError('');
    }
  };

  return (
    <div>
      <div className="flex justify-between">
        <p className="text-buttonOfCalculatorAndRightSideBackground">
          Number of People
        </p>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </div>
      <div className="pt-2">
        <div className="relative">
          <img
            className="w-[25px] h-[16px] absolute inset-y-4 left-0 flex items-center pl-3 "
            src="src\feature-tips-calculator\images\icon-person.svg"
            alt=""
            srcSet=""
          />

          <input
            className=" bg-teal-50 rounded-md h-[48px] w-[100%] lg:h-[48px] sm:h-[48px] text-2xl text-right pr-4"
            type="text"
            id="people"
            name="people"
            value={inputsInObject.people}
            onChange={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Input;

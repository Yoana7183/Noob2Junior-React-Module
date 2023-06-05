import { useContext, useState, useEffect } from 'react';
import { TipsContext as PeopleContext } from '../Tips_Calculator';

const Input = () => {
  const { inputsInObject, setinputsInObject } = useContext(PeopleContext);
  const [error, setError] = useState('');
  const [people, setPeople] = useState(0);

  useEffect(() => {
    if (inputsInObject.people == 0) {
      inputsInObject.people = '';
      setError('');
    }
  }, [inputsInObject]);

  const handleClick = (event) => {
    let numberOfPeople = event.target.value.trim();
    setPeople(numberOfPeople);
  };

  useEffect(() => {
    if (/^[a-zA-Z]+$/g.test(people)) {
      setError(`Please enter a number`);
    }
    if (isNaN(people)) {
      setError(`Please enter a number`);
    } else if (people < 0) {
      setError(`Can't be negative`);
    } else if (people === undefined) {
      setError('');
    } else {
      setinputsInObject((prev) => ({ ...prev, people: people }));
      setError('');
    }
  }, [people]);

  if (inputsInObject.people === 0) {
    inputsInObject.people = '';
  }

  let value = people === 0 ? '' : inputsInObject.people;
  return (
    <div>
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
            src="src\feature-tips-calculator\images\icon-person.svg"
            alt=""
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
    </div>
  );
};

export default Input;

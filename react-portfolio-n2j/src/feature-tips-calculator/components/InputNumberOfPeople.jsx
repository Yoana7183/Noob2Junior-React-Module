import { useContext, useState } from 'react';
import { TipsContext as PeopleContext } from '../Tips_Calculator';

const Input = () => {
  const [error, setError] = useState('');
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
  const { inputsInObject, setinputsInObject } = useContext(PeopleContext);
  if (inputsInObject.people === 0 || inputsInObject.people === 1) {
    inputsInObject.people = '';
  }
  return (
    <div>
      Number of People
      <div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <input
          type="text"
          id="people"
          name="people"
          value={inputsInObject.people}
          onChange={handleClick}
        />
      </div>
    </div>
  );
};

export default Input;

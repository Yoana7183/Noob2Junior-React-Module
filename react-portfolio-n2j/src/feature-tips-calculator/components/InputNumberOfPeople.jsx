import { useContext } from 'react';
import { TipsContext as PeopleContext } from '../Tips_Calculator';

const Input = () => {
  const { inputsInObject, setinputsInObject } = useContext(PeopleContext);

  const handleClick = (event) => {
    const numberOfPeople = event.target.value;
    inputsInObject ? 0 : '';

    setinputsInObject((prev) => ({ ...prev, people: numberOfPeople }));
  };

  if (inputsInObject.people === 0) {
    inputsInObject.people = '';
  }

  return (
    <div>
      <input
        type="number"
        id="people"
        name="people"
        value={inputsInObject.people}
        onChange={handleClick}
      />
    </div>
  );
};

export default Input;

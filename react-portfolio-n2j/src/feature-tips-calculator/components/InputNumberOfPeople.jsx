import { useContext } from 'react';
import { TipsContext as PeopleContext } from '../Tips_Calculator';

const Input = () => {
  const handleClick = (event) => {
    const numberOfPeople = event.target.value;

    setinputsInObject((prev) => ({ ...prev, people: numberOfPeople }));
  };
  const { inputsInObject, setinputsInObject } = useContext(PeopleContext);
  if (inputsInObject.people === 0 || inputsInObject.people === 1) {
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

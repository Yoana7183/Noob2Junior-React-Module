import { useState } from 'react';

const Input = () => {
  const [value, SetValue] = useState('');

  const handleClick = (event) => {
    SetValue(event.target.value);

    console.log('value is:', event.target.value);
  };

  return (
    <div>
      <input
        type="number"
        id="value"
        name="value"
        onChange={handleClick}
        value={value}
      />
    </div>
  );
};

export default Input;

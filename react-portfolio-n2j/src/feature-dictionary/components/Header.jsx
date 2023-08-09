import React from 'react';
import OnSubmitInput from './OnSubmitInput';

const Header = () => {
  return (
    <div className="w-full h-[250px] border-b-2 shadow-xl mb- ">
      <div className="pt-24">
        <OnSubmitInput />
      </div>
    </div>
  );
};

export default Header;

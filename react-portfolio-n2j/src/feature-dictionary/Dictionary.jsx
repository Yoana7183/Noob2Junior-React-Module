import React from 'react';
import Header from './components/Header';
import OnSubmitInput from './components/OnSubmitInput';
const Dictionary = () => {
  return (
    <>
      <div className="flex mt-[10rem] p-10 bg-slate-500">
        <Header />
        <OnSubmitInput />
      </div>
    </>
  );
};

export default Dictionary;

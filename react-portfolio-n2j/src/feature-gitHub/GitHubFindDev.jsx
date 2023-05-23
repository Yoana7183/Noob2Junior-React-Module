import React, { createContext, useState } from 'react';
import SearchBarAndSubmitButton from './components/SearchBar';
import useFetchData from './hooks/useFetchData';
export const UserContext = createContext();

// const initialState = {
//   name: null,
//   login: null,
//   timeStamp: null,
//   bio: null,
//   repos: null,
//   followers: null,
//   following: null,
//   location: null,
// };

const GitHubFindDev = () => {
  const [inputValue, setInputValue] = useState('');
  // const [userData, setUserData] = useState(initialState);

  const userData = useFetchData(inputValue);
  console.log(userData);

  const getValue = (value) => {
    setInputValue(value);
  };

  return (
    <div>
      <SearchBarAndSubmitButton getValue={getValue} />
    </div>
  );
};

export default GitHubFindDev;

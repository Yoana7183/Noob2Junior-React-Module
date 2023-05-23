// import React, { createContext } from 'react';
import SearchBarAndSubmitButton from './components/SearchBar';

// export const UserContext = createContext();
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
  // const [userData, setUserData] = useState(initialState);

  return (
    <div>
      <SearchBarAndSubmitButton />
    </div>
  );
};

export default GitHubFindDev;

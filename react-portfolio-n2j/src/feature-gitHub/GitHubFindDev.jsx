import React, { useEffect, useState, createContext } from 'react';
import SearchBarAndSubmitButton from './components/SearchBar';
import useFetchData from './hooks/useFetchData';
import PersonalUserInformation from './components/PersonalUserInformation';
// import TableInformation from './components/TableInformation';
// import LinksAndLocation from './components/Links';

export const UserDataContext = createContext();
const initialState = {
  name: null,
  login: null,
  timeStamp: null,
  bio: null,
  repos: null,
  followers: null,
  following: null,
  location: null,
  loading: null,
  error: null,
};

const GitHubFindDev = () => {
  const [inputValue, setInputValue] = useState('');
  const [userData, setUserData] = useState(initialState);

  const getValue = (value) => {
    setInputValue(value);
  };
  const userDataObject = useFetchData(inputValue);

  useEffect(() => {
    if (userDataObject.data == null || userDataObject.data == undefined) {
      return;
    }
    if (userDataObject.data.message == 'Not Found') {
      userDataObject.error = true;
    } else {
      userDataObject.error = false;
    }
    setUserData(() => ({
      name: userDataObject.data.name,
      login: userDataObject.data.login,
      avatar: userDataObject.data.avatar_url,
      timeStamp: userDataObject.data.created_at,
      bio: userDataObject.data.bio,
      repos: userDataObject.data.public_repos,
      followers: userDataObject.data.followers,
      following: userDataObject.data.following,
      location: userDataObject.data.location,
      loading: userDataObject.loading,
      error: userDataObject.error,
    }));
  }, [userDataObject.data]);

  return (
    <div className="flex justify-center mt-[10rem]">
      <div className="w-[730px] h-[444px]">
        <div className="flex justify-between ">
          <div className=" ">devfinder</div>
          <button className=" ">black</button>
        </div>
        <div className="border-2 border-black ">
          <UserDataContext.Provider value={userData}>
            <SearchBarAndSubmitButton
              getValue={getValue}
              isError={userDataObject.error}
            />
            <PersonalUserInformation />
          </UserDataContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default GitHubFindDev;

import React, { useEffect, useState, createContext } from 'react';
import SearchBarAndSubmitButton from './components/SearchBar';
import useFetchData from './hooks/useFetchData';
import PersonalUserInformation from './components/PersonalUserInformation';
import TableInformation from './components/TableInformation';
import LinksAndLocation from './components/Links';

export const UserDataContext = createContext();
const initialState = {};

const GitHubFindDev = () => {
  const [inputValue, setInputValue] = useState('');
  const [userData, setUserData] = useState(initialState);

  const userDataObject = useFetchData(inputValue);

  const getValue = (value) => {
    setInputValue(value);
  };

  useEffect(() => {
    console.log();
    if (
      userDataObject.data === null ||
      (userDataObject.error == true &&
        userDataObject.data.message == 'Not Found')
    ) {
      setUserData(() => ({
        name: 'The Octocat',
        avatar: 'https://avatars.githubusercontent.com/u/583231?v=4',
        login: 'octocat',
        timeStamp: '2011-01-25',
        bio: '',
        repos: 8,
        followers: 9350,
        following: 9,
        location: 'San Francisco',
        error: true,
      }));
    } else {
      userDataObject.error = false;
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
      console.log(userData);
    }
  }, [userDataObject.data]);

  return (
    <div className="flex justify-center mt-[10rem]">
      <div className="w-[730px] h-[444px]">
        <div className="flex justify-between ">
          <div className=" ">devfinder</div>
          <button className=" ">black</button>
        </div>
        <div>
          <UserDataContext.Provider value={userData}>
            <div className="border-2 border-black ">
              <SearchBarAndSubmitButton getValue={getValue} />
            </div>
            <div className="border-2 border-black ">
              <PersonalUserInformation />
              <TableInformation />
              <LinksAndLocation />
            </div>
          </UserDataContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default GitHubFindDev;

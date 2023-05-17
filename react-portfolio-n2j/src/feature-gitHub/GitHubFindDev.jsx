import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();
const initialState = {
  name: null,
  login: null,
  timeStamp: null,
  bio: null,
  repos: null,
  followers: null,
  following: null,
  location: null,
};

const GitHubFindDev = () => {
  const [user, setUser] = useState(initialState);

  const useFetchData = (userName) => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${userName}`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_GITHUB_API_KEY}`,
            },
          }
        );
        const data = await response.json();

        setUser(() => ({
          name: data.name,
          login: data.login,
          timeStamp: data.created_at,
          bio: data.bio,
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          location: data.location,
        }));
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  };
  useEffect(() => {
    useFetchData('Yoana7183');
  }, []);
  console.log(user);
  return (
    <div>
      <div>ddd</div>
    </div>
  );
};

export default GitHubFindDev;

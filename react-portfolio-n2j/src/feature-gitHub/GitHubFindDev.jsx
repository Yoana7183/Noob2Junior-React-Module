import useFetchData from './hooks/useFetchData';

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
  useFetchData('Yoana7183');

  return (
    <div>
      <div>
        {/* {Object.keys(user).map((key) => (
          <li key={key}>
            {key}: {user[key]}
          </li>
        ))} */}
      </div>
    </div>
  );
};

export default GitHubFindDev;

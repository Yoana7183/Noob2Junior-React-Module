import { useContext, useEffect } from 'react';
import { UserDataContext as UserCredentials } from '../GitHubFindDev';

const PersonalUserInformation = () => {
  const userData = useContext(UserCredentials);
  const image = userData.avatar;
  if (userData === undefined || userData == null) {
    console.log(typeof userData);
    return;
  }
  useEffect(() => {
    if (userData == undefined || userData == null || userData.error == true) {
      return;
    }
  }, [userData]);

  return (
    <div>
      <div>
        <div className="w-[117px] h-[117px]">
          <img src={image} />
        </div>
        <div>{userData.name}</div>
        <div>{userData.login}</div>
        <div>{userData.timeStamp}</div>
      </div>
      <div>
        <div>{userData.bio}</div>
      </div>
    </div>
  );
};
export default PersonalUserInformation;

import { useContext, useEffect } from 'react';
import { UserDataContext as UserCredentials } from '../GitHubFindDev';

const PersonalUserInformation = () => {
  const userData = useContext(UserCredentials);
  const image = userData.avatar;
  const formattedDate = userData.timeStamp
    ? new Date(userData.timeStamp).toLocaleString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })
    : undefined;

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
        <div className="w-[117px] h-[117px] rounded-full overflow-hidden">
          <img src={image} />
        </div>
        <div>{userData.name}</div>
        <div>@{userData.login}</div>
        <div>Joined {formattedDate}</div>
      </div>
      <div>
        <div>{userData.bio ? userData.bio : 'This profile has no bio'}</div>
      </div>
    </div>
  );
};
export default PersonalUserInformation;

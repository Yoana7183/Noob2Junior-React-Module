import { useContext, useEffect } from 'react';
import {
  UserDataContext as UserCredentials,
  ThemeContext,
} from '../GitHubFindDev';

const PersonalUserInformation = () => {
  const userData = useContext(UserCredentials);
  const initialTheme = useContext(ThemeContext);
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
  const toggleText = initialTheme === 'dark' ? '  text-white' : 'text-black';
  return (
    <div className="pt-6 pl-4 h-[95px] mb-[6rem]">
      <div className="grid grid-cols-3">
        <div className="w-[117px] h-[117px] rounded-full overflow-hidden col-start-1">
          <img src={image} />
        </div>

        <div className=" ml-[-5rem] pt-5 col-start-2">
          <div className={` text-2xl font-black ${toggleText}`}>
            {userData.name}
          </div>
          <div className="text-blue-600">@{userData.login}</div>
          <div className="col-start-2 pt-5">
            <div className=" line-clamp-2 w-[490px]">
              {userData.bio ? userData.bio : 'This profile has no bio'}
            </div>
          </div>
        </div>
        <div className=" mr-12">Joined {formattedDate}</div>
      </div>
    </div>
  );
};
export default PersonalUserInformation;

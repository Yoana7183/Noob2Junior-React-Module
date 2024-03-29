import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const PersonalUserInformation = () => {
  const { userData, theme } = useContext(DataContext);
  const image = userData.avatar;
  const formattedDate = userData.timeStamp
    ? new Date(userData.timeStamp).toLocaleString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })
    : undefined;

  const toggleText = theme === 'dark' ? '  text-white' : 'text-black';
  return (
    <section className=" pt-3 sm:pt-6 pl-4 h-[95px] mb-[6rem]">
      <div className="grid lg:grid-cols-3 grid-cols-2">
        <div className=" w-[70px] h-[70px] sm:w-[117px] sm:h-[117px] rounded-full overflow-hidden col-start-1">
          <a href={userData.urlUser} target="_blank" rel="noopener noreferrer">
            <img src={image} alt="user-url-to-profil" />
          </a>
        </div>

        <div className=" ml-[-3rem] sm:ml-[-5rem] pt-3 sm:pt-5 col-start-2">
          <div
            className={` text-sm  sm:text-2xl font-black h-[40px] ${toggleText}`}
          >
            {userData.name}
          </div>
          <div className="text-blue-600 mt-[-1.2rem] sm:mt-0 text-sm sm:text-base">
            @{userData.login}
          </div>
          <div className=" lg:hidden text-sm sm:text-base ">
            Joined {formattedDate}
          </div>
          <div className="lg:col-start-2 ml-[-6rem] md:col-start-1 pt-4  sm:ml-[-10rem] lg:ml-0 text-sm sm:text-base">
            <div className="line-clamp-2  md:w-[493px] text-sm sm:text-base">
              {userData.bio ? userData.bio : 'This profile has no bio'}
            </div>
          </div>
        </div>
        <div className=" mr-12 lg:inline-block hidden">
          Joined {formattedDate}
        </div>
      </div>
    </section>
  );
};
export default PersonalUserInformation;

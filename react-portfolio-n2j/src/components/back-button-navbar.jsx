import { Link } from 'react-router-dom';

const BackButton = () => {
  return (
    <div>
      <Link to="/">
        <div className="w-6 ml-4 mt-[-4rem] mb-5">
          <img src="\src\img-icons\angles-left-solid.svg" alt="" srcSet="" />
        </div>
      </Link>
    </div>
  );
};
export default BackButton;

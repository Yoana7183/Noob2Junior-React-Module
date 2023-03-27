import { Outlet, Link } from 'react-router-dom';
import Button from './components/Button';

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>Home</li>
          <li>Current Project: </li>
          <div className="bg-indigo-500">
            <Link to="/">
              <Button title={'BACK'} />
            </Link>
          </div>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;

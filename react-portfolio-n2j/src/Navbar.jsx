import { Outlet, Link, useLocation } from 'react-router-dom';
import Button from './components/Button';
const Navbar = () => {
  let currentProject = useLocation();

  switch (currentProject.pathname) {
    case '/loopstudio':
      currentProject = 'Landing Page Loopstudios';
      break;
    case '/equalize':
      currentProject = 'Landing Page Equalizer';
      break;
    case '/git':
      currentProject = 'GitHub user search app';
      break;
    case '/tipscalc':
      currentProject = 'Tips calculator App';
      break;
    case '/e-commerce':
      currentProject = 'E-commerce product page';
      break;
    case '/':
      currentProject = 'Home page';
      break;
  }

  return (
    <>
      <nav>
        <ul>
          <li>Home</li>
          <li>
            Current Project: <div>{currentProject}</div>
          </li>
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

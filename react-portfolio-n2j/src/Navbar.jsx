import { Outlet, Link, useLocation } from 'react-router-dom';

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
      <nav className="flex flex-row bg-slate-400">
        <div className="basis-1/3 w-96">
          <Link to="/">
            <div className="w-5">
              <img
                src="\src\img-icons\angles-left-solid.svg"
                alt=""
                srcSet=""
              />
            </div>
          </Link>
        </div>
        <div className="basis-1/2">Current Project: {currentProject}</div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;

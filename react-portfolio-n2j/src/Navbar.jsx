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
      <nav className="flex flex-row shadow-md h-16 hover:shadow-xl items-center mb-5">
        <div className="basis-5/12 ">
          <Link to="/">
            <div className="w-6 ml-4">
              <img
                src="\src\img-icons\angles-left-solid.svg"
                alt=""
                srcSet=""
              />
            </div>
          </Link>
        </div>
        <div className="basis-1/2 text-xl">
          Current Project: {currentProject}
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;

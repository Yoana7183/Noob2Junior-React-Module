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
      currentProject = 'GitHub User Search App';
      break;
    case '/tipscalc':
      currentProject = 'Tips Calculator App';
      break;
    case '/e-commerce':
      currentProject = 'E-Commerce Product Page';
      break;
    case '/':
      currentProject = 'Home Page';
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
        <div className="basis-1/2 font-thin sm:text-3xl sms:text-base lg:text-4xl text-gray-700">
          {currentProject}
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;

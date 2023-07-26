import { Outlet, useLocation } from 'react-router-dom';

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
    case '/dictionary':
      currentProject = 'Dictionary Page';
      break;
    case '/':
      currentProject = 'Home Page';
      break;
  }

  return (
    <>
      <nav className="flex justify-center pt-5 lg:pt-2 md:pt-2 sm:pt-2 shadow-md h-16 hover:shadow-xl mb-5">
        <div className="flex justify-center font-thin sm:text-3xl sms:text-base lg:text-4xl lg:pt-0 text-gray-700">
          {currentProject}
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;

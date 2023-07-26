import { Outlet, Link } from 'react-router-dom';

import Footer from '../Footer';

const Projects = () => {
  return (
    <>
      <div>
        <div className="w-fit mx-auto grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 pt-10 mb-56 sm:grid-cols-1 sms:grid-cols-1">
          <div>
            <Link to="/git">
              <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <img
                  src="\src\img-icons\github.jpg"
                  alt="Product"
                  className="h-80 w-72 object-cover rounded-t-xl"
                />
                <div className="px-4 py-3 w-72">
                  <span className="text-gray-400 mr-3 uppercase text-xs">
                    GitHub
                  </span>
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    GitHub
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/loopstudio">
              <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <img
                  src="\src\img-icons\loopstudios.jpg"
                  alt="Product"
                  className="h-80 w-72 object-cover rounded-t-xl"
                />
                <div className="px-4 py-3 w-72">
                  <span className="text-gray-400 mr-3 uppercase text-xs">
                    Loopstudios
                  </span>
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    Loopstudios
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/e-commerce">
              <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <img
                  src="\src\img-icons\e-commerce.jpg"
                  alt="Product"
                  className="h-80 w-72 object-cover rounded-t-xl"
                />
                <div className="px-4 py-3 w-72">
                  <span className="text-gray-400 mr-3 uppercase text-xs">
                    E-commerce
                  </span>
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    E-commerce
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/equalize">
              <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl col-span-3">
                <img
                  src="\src\img-icons\equalizer.jpg"
                  alt="Product"
                  className="h-80 w-72 object-cover rounded-t-xl"
                />
                <div className="px-4 py-3 w-72">
                  <span className="text-gray-400 mr-3 uppercase text-xs">
                    Equalizer
                  </span>
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    Equalizer
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/tipscalc">
              <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <img
                  src="\src\img-icons\tipsCalculator.jpg"
                  alt="Product"
                  className="h-80 w-72 object-cover rounded-t-xl"
                />
                <div className="px-4 py-3 w-72">
                  <span className="text-gray-400 mr-3 uppercase text-xs">
                    Tips Calculator
                  </span>
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    Tips Calculator
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/dictionary">
              <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <img
                  src="\src\img-icons\dictionary.png"
                  alt="Product"
                  className="h-80 w-72 object-cover rounded-t-xl"
                />
                <div className="px-4 py-3 w-72">
                  <span className="text-gray-400 mr-3 uppercase text-xs">
                    Dictionary
                  </span>
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    IN DEVELOPMENT
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
      <Outlet />
    </>
  );
};

export default Projects;

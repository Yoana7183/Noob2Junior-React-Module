import { Outlet, Link } from 'react-router-dom';

import Footer from '../Footer';

const Projects = () => {
  return (
    <>
      <div>
        <div className="flex justify-center mt-16 text-gray-400 mr-3 uppercase text-2xl relative">
          <p>My Resume</p>
          <div className="absolute bottom-0 left-1/5 w-3/5 h-[1px] bg-gray-400"></div>
        </div>

        <div className="flex justify-center">
          <div>
            <Link to="/cv">
              <div className="lg:w-[40rem] md:w-[30rem] sm:w-[25rem] w-[18rem] sm:mt-5 mt-8 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <div className="flex justify-center">
                  <img
                    src="\img-icons\cv.png"
                    alt="Product"
                    className="h-80 w-80 ml-[0.2rem]  object-cover rounded-t-xl"
                  />
                </div>
                <div className="px-4 py-3 w-72">
                  <span className="text-gray-400 mr-3 uppercase text-xs">
                    CV
                  </span>
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    Resume
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex justify-center  flex-col sm:flex-row items-center mt-[5rem]">
          <div className="w-4 h-4 mt-2  mb-1 sm:mb-0 sm:mr-2">
            <img src="/src/CV_Component/img/down.gif" alt="" srcSet="" />
          </div>
        </div>

        <div className="flex justify-center mt-[5rem] text-gray-400 mr-3 uppercase text-2xl relative">
          <p>My Projects</p>
          <div className="absolute bottom-0 left-1/5 w-3/5 h-[1px] bg-gray-400"></div>
        </div>
        <div className="  w-fit mx-auto grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 pt-10 mb-56 sm:grid-cols-1 sms:grid-cols-1">
          <div>
            <Link to="/git">
              <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <img
                  src="\img-icons\github.jpg"
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
                  src="\img-icons\loopstudios.jpg"
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
                  src="\img-icons\e-commerce.jpg"
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
                  src="\img-icons\equalizer.jpg"
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
                  src="\img-icons\tipsCalculator.jpg"
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
                  src="\img-icons\dictionary.png"
                  alt="Product"
                  className="h-80 w-72 object-cover rounded-t-xl"
                />
                <div className="px-4 py-3 w-72">
                  <span className="text-gray-400 mr-3 uppercase text-xs">
                    Dictionary
                  </span>
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    Simple English Dictionary
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

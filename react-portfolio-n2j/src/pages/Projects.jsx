import { Outlet, Link } from 'react-router-dom';
const Projects = () => {
  return (
    <>
      <div>
        <div>
          <div>
            <Link to="/git">GitHub</Link>
          </div>
          <div>
            <Link to="/loopstudio">loopstudio</Link>
          </div>
          <div className="bg-indigo-500">
            <Link to="/e-commerce">e-commerce</Link>
          </div>
          <div className="bg-indigo-500">
            <Link to="/equalize">equalize</Link>
          </div>
          <div className="bg-indigo-500">
            <Link to="/tipscalc">tipscalc</Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Projects;

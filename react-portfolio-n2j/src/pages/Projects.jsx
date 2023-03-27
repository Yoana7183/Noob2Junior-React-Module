import { Outlet, Link } from 'react-router-dom';
import Button from '../components/Button';

const Projects = () => {
  return (
    <>
      <div>
        <div>
          <div>
            <Link to="/git">
              <Button title={'Git Hub'} />
            </Link>
          </div>
          <div>
            <Link to="/loopstudio">
              <Button title={'LoopStudio'} />
            </Link>
          </div>
          <div className="bg-indigo-500">
            <Link to="/e-commerce">
              <Button title={'E-commerce shop'} />
            </Link>
          </div>
          <div className="bg-indigo-500">
            <Link to="/equalize">
              <Button title={'Equalize Landing Page'} />
            </Link>
          </div>
          <div className="bg-indigo-500">
            <Link to="/tipscalc">
              <Button title={'Tips Calculator'} />
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Projects;

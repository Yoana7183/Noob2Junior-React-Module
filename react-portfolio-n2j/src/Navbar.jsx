import { Outlet, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>Home</li>
          <li>My Projects</li>
          <div className="bg-indigo-500">
            <Link to="/">Back</Link>
          </div>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;

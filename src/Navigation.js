import { NavLink } from 'react-router-dom';
import './Navigation.css';
import { useContext } from "react";
import userContext from "./userContext";

/** Navigation Bar
 *
 * Props: user
 *
 * State: none
 *
 * App --> NavLink
 */
function Navigation({ logout }) {
  const user = useContext(userContext);

  return (
    <nav className='Navigation navbar navbar-expand-md'>
      <div className='container-fluid'>
        <NavLink to={'/'} className='navbar-brand'>
          Jobly
        </NavLink>
        {user === null &&
          <ul className='navbar-nav ms-auto'>
          <li className='nav-item me-4'>
            <NavLink to={'/login'} className='nav-link'>
              Login
            </NavLink>
          </li>
          <li  className='nav-item me-4'>
            <NavLink to={'/signup'} className='nav-link'>
              Sign Up
            </NavLink>
          </li>
        </ul>}
        {user !== null &&
        <ul className='navbar-nav ms-auto'>
          <li  className='nav-item me-4'>
            <NavLink to={'/companies'} className='nav-link'>
              Companies
            </NavLink>
          </li>
          <li  className='nav-item me-4'>
            <NavLink to={'/jobs'} className='nav-link'>
              Jobs
            </NavLink>
          </li>
          <li className='nav-item me-4'>
            <NavLink to={'/profile'} className='nav-link'>
              updateProfile
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to={'/'} onClick={logout} className='nav-link'>
              Log out {user?.username}
            </NavLink>
          </li>
        </ul>}
      </div>
    </nav >
  );
}

export default Navigation;
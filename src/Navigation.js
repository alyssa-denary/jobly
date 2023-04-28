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
        {user.username === null &&
          <ul className='navbar-nav ms-auto'>
          <li>
            <NavLink to={'/login'} className={'nav-item me-4'}>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to={'/signup'} className={'nav-item me-4'}>
              Sign Up
            </NavLink>
          </li>
        </ul>}
        {user.username !== null &&
        <ul className='navbar-nav ms-auto'>
          <li>
            <NavLink to={'/companies'} className={'nav-item me-4'}>
              Companies
            </NavLink>
          </li>
          <li>
            <NavLink to={'/jobs'} className={'nav-item me-4'}>
              Jobs
            </NavLink>
          </li>
          <li>
            <NavLink to={'/profile'} className={'nav-item me-4'}>
              updateProfile
            </NavLink>
          </li>
          <li>
            <NavLink to={'/'} onClick={logout} className={'nav-item me-4'}>
              Log out ${user.username}
            </NavLink>
          </li>
        </ul>}
      </div>
    </nav >
  );
}

export default Navigation;
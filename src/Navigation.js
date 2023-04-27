import { NavLink } from 'react-router-dom';
import './Navigation.css';

/** Navigation Bar
 *
 * Props: none
 *
 * State: none
 *
 * App --> NavLink
 */
function Navigation() {
  return (
    <nav className='Navigation navbar navbar-expand-md'>
      <div className='container-fluid'>
        <NavLink to={'/'} className='navbar-brand'>
          Jobly
        </NavLink>
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
        </ul>
      </div>
    </nav >
  );
}

export default Navigation;
import "./Homepage.css";
import { useNavigate }from 'react-router-dom';
import { useContext } from 'react';
import userContext from './userContext';

/**  Homepage
 *
 * Props: user
 *
 * State: none
 *
 * RouteList --> Homepage
*/

function Homepage() {
  const { user } = useContext(userContext);
  const navigate = useNavigate();

  function navigateLogIn() {
    navigate("/login");
  }

  function navigateSignUp() {
    navigate("/signup");
  }

  return (
    <div className="Homepage d-flex flex-column justify-content-center">
      <h2>Jobly</h2>
      <p>All the jobs in one, convenient place.</p>
      {user.username === null &&
        <div>
          <button className="btn btn-primary" onClick={navigateLogIn}>Log in</button>
          <button className="btn btn-primary" onClick={navigateSignUp}>Sign up</button>
        </div>}
      {user.username !== null &
        <div>
          <h2>Welcome Back, {user.firstName}!</h2>
        </div>
      }
    </div>
  );
}

export default Homepage;
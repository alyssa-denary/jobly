import "./Homepage.css";
import { useNavigate } from 'react-router-dom';
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
  const user = useContext(userContext);
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
      {user === null &&
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary me-3" onClick={navigateLogIn}>
            Log in
          </button>
          <button className="btn btn-primary" onClick={navigateSignUp}>
            Sign up
          </button>
        </div>}
      {user !== null &&
        <div>
          <h2>Welcome Back, {user.firstName}!</h2>
        </div>
      }
    </div>
  );
}

export default Homepage;
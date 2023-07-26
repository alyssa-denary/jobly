import "./Homepage.css";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import userContext from './userContext';
import DemoButton from './DemoButton';

/**  Homepage
 *
 * Props: user
 *
 * State: none
 *
 * RouteList --> Homepage
*/

function Homepage({ loginUser }) {
  const user = useContext(userContext);
  
  // const navigate = useNavigate();

  // function navigateLogIn() {
  //   navigate("/login");
  // }

  // function navigateSignUp() {
  //   navigate("/signup");
  // }

  return (
    <div className="Homepage d-flex flex-column justify-content-center">
      <h2>Jobly</h2>
      <p>All the jobs in one, convenient place.</p>
      {user === null &&
        <div className="d-flex justify-content-center">
          <DemoButton loginUser={loginUser}/>
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
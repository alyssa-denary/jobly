import { Routes, Route, Navigate, Switch } from 'react-router-dom';
import CompanyList from './CompanyList';
import JobList from './JobList';
import CompanyDetail from './CompanyDetail';
import Homepage from './Homepage';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';


/** Route list
 *
 * Props: none
 *
 * State : none
 *
 * App --> RouteList --> { Homepage, CompanyList, CompanyDetail, JobList}
 */

function RouteList({ user, loginUser, signUpUser, updateProfile }) {

  return (
    <Routes>
      <Route
        path="/"
        element={<Homepage />}
      />
      {user?.username === null &&
        <>

          <Route
            path="/login"
            element={<LoginForm />}
          />

          <Route
            path="/signup"
            element={<SignUpForm />}
          />
        </>
      }
      {user?.username !== null &&
        <>
          < Route
            path="/companies"
            element={< CompanyList />}
          />

          < Route
            path="/companies/:handle"
            element={< CompanyDetail />}
          />

          < Route
            path="/jobs"
            element={< JobList />}
          />

          < Route
            path="/*"
            element={< Navigate to="/" />}
          />
        </>
      }
    </Routes >
  );
}

export default RouteList;
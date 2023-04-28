import { Routes, Route, Navigate, Switch } from 'react-router-dom';
import { useContext } from 'react';
import userContext from './userContext';
import CompanyList from './companies/CompanyList';
import JobList from './jobs/JobList';
import CompanyDetail from './companies/CompanyDetail';
import Homepage from './Homepage';
import SignUpForm from './forms/SignUpForm';
import LoginForm from './forms/LoginForm';
import ProfileForm from './forms/ProfileForm';


/** Route list
 *
 * Props: none
 *
 * State : none
 *
 * App --> RouteList --> { Homepage, CompanyList, CompanyDetail, JobList}
 */

function RouteList({ loginUser, signUpUser, updateProfile }) {
  const user = useContext(userContext);

  return (
    <Routes>
      <Route
        path="/"
        element={<Homepage />}
      />
      {user === null &&
        <>

          <Route
            path="/login"
            element={<LoginForm loginUser={loginUser} />}
          />

          <Route
            path="/signup"
            element={<SignUpForm signUpUser={signUpUser} />}
          />
        </>
      }
      {user !== null &&
        <>
          <Route
            path="/profile"
            element={<ProfileForm updateProfile={updateProfile} />}
          />

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
        </>
      }
      < Route
        path="/*"
        element={< Navigate to="/" />}
      />
    </Routes >
  );
}

export default RouteList;
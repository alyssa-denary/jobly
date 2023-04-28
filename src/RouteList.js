import { Routes, Route, Navigate, Switch } from 'react-router-dom';
import { useContext } from 'react';
import userContext from './userContext';
import CompanyList from './CompanyList';
import JobList from './JobList';
import CompanyDetail from './CompanyDetail';
import Homepage from './Homepage';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import ProfileForm from './ProfileForm';


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
      {user?.username === null &&
        <>

          <Route
            path="/login"
            element={<LoginForm loginUser={loginUser} />}
          />

          <Route
            path="/signup"
            element={<SignUpForm signUpUser={signUpUser}/>}
          />
        </>
      }
      {user?.username !== null &&
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
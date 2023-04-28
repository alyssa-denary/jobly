import './App.css';
import RouteList from './RouteList';
import Navigation from './Navigation';
import userContext from "./userContext";
import { useState, useEffect } from 'react';
import JoblyApi from './api';
import { Navigate } from 'react-router-dom';

/** App
 *
 * State: none
 *
 * props: none
 *
 * App --> { Navigation, RouteList }
 */

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  console.debug("user", user);
  console.debug("token", token);

  async function loginUser(username, password) {
    // try {
    const resToken = await JoblyApi.login(username, password);
    setToken(resToken);

    const resUser = await JoblyApi.getUser(username, resToken);
    setUser(resUser);
    // } catch (err) {
    //   console.log('err: ', err);
    // }
  }

  async function signUpUser(username, password, firstName, lastName, email) {
    // try {
      const resToken = await JoblyApi.registerUser(
        username,
        password,
        firstName,
        lastName,
        email);
      setToken(resToken);
      const resUser = await JoblyApi.getUser(username, resToken);
      setUser(resUser);
    // } catch (err) {
    //   console.log('err: ', err);
    // }
  }

  function updateProfile(data) {
    // calling api function
    // setUser with response data
  }

  function logoutUser() {
    setUser(null);
    setToken(null);
    <Navigate to="/" />;
  }

  return (
    <div className="App">
      <userContext.Provider value={user}>
        <Navigation logout={logoutUser} />
        <RouteList
          loginUser={loginUser}
          signUpUser={signUpUser}
          updateProfile={updateProfile}
        />
      </userContext.Provider>
    </div>
  );
}

export default App;

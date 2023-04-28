import './App.css';
import RouteList from './RouteList';
import Navigation from './Navigation';
import { BrowserRouter } from 'react-router-dom';
import userContext from "./userContext";
import { useState, useEffect } from 'react';
import JoblyApi from './api';

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
    try {
      const resToken = await JoblyApi.login(username, password);
      setToken(resToken);
      setUser({ username });
    } catch (err) {
      console.log('err: ', err);
    }
  }

  useEffect(function fetchUserOnToken() {
    async function fetchUser() {
      try {
        const userResult = await JoblyApi.getUser(user.username, token);
        setUser(userResult);
      } catch (err) {
        console.log('err: ', err);
      }
    }
    if (user !== null) {
      fetchUser();
    }
  }, [token]);

  async function signUpUser(username, password, firstName, lastName, email) {
    try {
      const resToken = await JoblyApi.registerUser(username, password, firstName, lastName, email);
      setToken(resToken);
      setUser(
        { username }
      );
    } catch (err) {
      console.log('err: ', err)
    }
  }

  function updateProfile(data) {
    // calling api function
    // setUser with response data
  }

  function logoutUser() {
    setUser(null);
    setToken(null);
  }

  return (
    <div className="App">
      <userContext.Provider value={user}>
        <BrowserRouter>
          <Navigation logout={logoutUser} />
          <RouteList
            loginUser={loginUser}
            signUpUser={signUpUser}
            updateProfile={updateProfile}
          />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;

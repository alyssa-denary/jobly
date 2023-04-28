import './App.css';
import RouteList from './RouteList';
import Navigation from './Navigation';
import { BrowserRouter } from 'react-router-dom';
import userContext from "./userContext";
import { useState } from 'react';

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


  function loginUser(){
    // hold on to username
    // call api function --> get token
    // if token then username is valid, call 2nd api function
    // . . to GET /[username] to get all user info
    // {username, firstName, lastName, isAdmin, jobs}
    // setUser with that info
  }

  function signUpUser(){}

  function profileUpdate(data){
    // calling api function
    // setUser with response data
  }

  function logoutUser(){
    setUser(null);
  }

  return (
    <div className="App">
      <userContext.Provider value={user}>
        <BrowserRouter>
          <Navigation logout={logoutUser} />
          <RouteList />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;

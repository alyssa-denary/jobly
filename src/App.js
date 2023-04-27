import './App.css';
import RouteList from './RouteList';
import NavBar from './NavBar';
import { BrowserRouter } from 'react-router-dom';

/** App
 *
 * State: none
 *
 * props: none
 *
 * App --> { NavBar, RouteList }
 */

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <RouteList/>
      </BrowserRouter>
    </div>
  );
}

export default App;

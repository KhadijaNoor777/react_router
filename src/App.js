//import logo from './logo.svg';
import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';

function App() {
  return (
    <Router>
    <div className="App">
        <header className='App-header'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to={
                {
                  pathname: '/about',
                  state: {
                    from: 'root'
                  }
                }
              }>About</Link>
            </li>
            <li>
              <Link to='/user/abc'>User</Link>
            </li>
          </ul>
          <div>
            <Switch>
              <Route exact path= '/' component={Home}></Route>
              <Route exact path= '/about' component={About}></Route>
              <Route exact path= '/user/:name' component={User}></Route>
            </Switch>
          </div>
        </header>
      </div>
    </Router>


  );
}

export default App;

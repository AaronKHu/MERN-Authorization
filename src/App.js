import './App.css';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Register from "./Register";
import Login from './Login';
import UserContext from './UserContext';

import {useState} from 'react';

function App() {

  const [email, setEmail] = useState('');

  return (
      <UserContext.Provider value={{email, setEmail}}>
        <BrowserRouter>
          <div>
            <Link to={'/'}>Home</Link> |
            <Link to={'/login'}>Login</Link> |
            <Link to={'/register'}>Register</Link>
          </div>
          <Switch>
            <Route exact path={'/register'} component={Register} />
            <Route exact path={'/login'} component={Login} />
          </Switch>
          <hr/>
        </BrowserRouter>
      </UserContext.Provider>
  );
}

export default App;

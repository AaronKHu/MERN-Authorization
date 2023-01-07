import './App.css';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Register from "./Register";
import Login from './Login';
import UserContext from './UserContext';

import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  const [email, setEmail] = useState('');

  useEffect(() => {
    axios.get('http://localhost:4000/user', {withCredentials:true})
      .then(response => {
        setEmail(response.data.email);
      });
  }, []);


  return (
      <UserContext.Provider value={{email, setEmail}}>
        <BrowserRouter>
        <div>
          {!!email && (
            <div>Logged in as {email}</div>
          )} 
          {!email && ( //if we don't have email 
            <div>Not logged in.</div>
          )}
        </div>
        <hr />
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

import './App.css';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Register from "./Register";
import Login from './Login';

function App() {
  return (
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
  );
}

export default App;

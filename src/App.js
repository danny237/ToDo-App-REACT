import { useState } from 'react';
import './App.css';
import Login from './Components/Forms/Login'
import Home from './Components/Home';
import Todo from './Components/Todo/Todo';
import Register from './Components/Forms/Register'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from 'react-router-dom';

import { ADMIN_EMAIL, ADMIN_PASSWORD } from './Components/Constants/FormConstants'

function App() {

  const [users, setUsers] = useState([
    {
      email: ADMIN_EMAIL,
      password: ADMIN_PASSWORD
    }
  ])

  const [loginStatus, setLoginStatus] = useState(false)

  return (
    <div className="App">
      <Router>
        <Switch>
          



          <Route exact path="/register" component={Register} />


          <Route
            exact
            path="/"
            render={(props) => (
              loginStatus ?
                <Todo setLoginStatus={setLoginStatus} loginStatus={loginStatus} /> :
                <Login users={users} loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
            )}
          />


        </Switch>
      </Router>




      {/* <Login users={users} setLoginStatus={setLoginStatus} />
      <Todo /> */}
    </div>
  );
}

export default App;

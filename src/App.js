import { useState, useEffect } from 'react';
import './App.css';
import Login from './Components/Forms/Login'
import Todo from './Components/Todo/Todo';
import Register from './Components/Forms/Register'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { ADMIN_EMAIL, ADMIN_PASSWORD } from './Components/Constants/FormConstants'

function App() {

  const [users, setUsers] = useState([
    {
      email: ADMIN_EMAIL,
      password: ADMIN_PASSWORD
    },
  ])
  const [loginStatus, setLoginStatus] = useState(false)

  useEffect(() => {
    let isLoggedIn = JSON.parse(localStorage.getItem("loginStatus"))
    if(isLoggedIn === null || isLoggedIn === false){
      setLoginStatus(false)
    }else{
      setLoginStatus(true)
    }
  },[])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/register"
          render={(props) => (<Register {...props} users={users} setUsers={setUsers} />)}/>
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
    </div>
  );
}

export default App;

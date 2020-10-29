import { useState } from 'react';
import './App.css';
import Login from './Components/Forms/Login'
import Home from './Components/Home';
import Todo from './Components/Todo/Todo';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
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

  console.log("I am from app js")

  return (
    <div className="App">
      
      <nav className="navbar">
        <div className="container">
            <a className="navbar-brand" href="#">ToDo App</a>
            {loginStatus ?
            <button
                className="btn logout-btn"
                onClick = {() => setLoginStatus(false)}
            >Logout</button> :
            <button
                className="btn logout-btn"
            >Register</button>
          }
        </div>
      </nav>
      
      <Router>
        <Switch>

        
          <Route
            exact
            path= {"/"}
            render = {(props) => (
              loginStatus ?
              <Todo setLoginStatus={setLoginStatus}/> :
              <Login {...props} users={users} setLoginStatus={setLoginStatus} />
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

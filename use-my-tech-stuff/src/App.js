import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './Components/Navigation';
import SignUp from './Components/SignUp';
import Login from './Components/Login';

import UpdateItem from "./Components/UpdateItem";
import PrivateRoute from "./Components/PrivateRoute";
import './App.css';
import TechForRent from './Components/TechForRent';

const initialUser = {
  username: "",
  password: "",
  firstName: "",
  lastName: ""
}

function App() {
  const [user, setUser] = useState(initialUser);
  const [userRentals, setUserRentals] = useState([]);
  const [rentals, setRentals] = useState([]);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/' component={Login} />

          <PrivateRoute path="/tech-protected/add"
            render={props =>
              <AddItem {...props}
                setRentals={setRentals}
                setUserRentals={setUserRentals}
              />}
          />
          <PrivateRoute path="/tech-protected/update/:id"
            render={props =>
              <UpdateItem {...props}
                setUserRentals={setUserRentals}
              />}
          />
          <PrivateRoute path='/tech-protected/user/:id'
            render={props =>
              <TechForRent {...props}
                user={user}
                setUser={setUser}
                rentals={rentals}
                setRentals={setRentals}
                userRentals={userRentals}
                setUserRentals={setUserRentals}
              />}
          />
        </Switch>

      </div>
    </Router>

  );
}

export default App;

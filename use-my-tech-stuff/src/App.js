import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './Components/Navigation';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import OwnerItems from "./Components/OwnerItems";
import UpdateItem from "./Components/UpdateItem";
import PrivateRoute from "./Components/PrivateRoute";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/' component={Login} />
          <PrivateRoute path="/tech-protected/:id/update" component={UpdateItem} />
          <PrivateRoute path='/tech-protected' component={TechForRent} />
        </Switch>

      </div>
    </Router>

  );
}

export default App;

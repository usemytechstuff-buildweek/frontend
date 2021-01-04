import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SignUp from './Components/SignUp';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='signup' component={SignUp}/>
        </Switch>
        
      </div>
    </Router>
    
  );
}

export default App;

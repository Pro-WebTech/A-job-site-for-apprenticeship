import React from "react";
import { Route, BrowserRouter as Router, Switch  } from 'react-router-dom';
import RegisterStudent from "./pages/registerStudent";

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/reg-student' component={RegisterStudent} />
          {/* <Route exact path='/main' component={MainPage} /> */}
        </Switch>
      </Router>
    );
  }
  
}

export default App;

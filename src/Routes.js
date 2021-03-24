import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import Main from "./Pages/Main/Main";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

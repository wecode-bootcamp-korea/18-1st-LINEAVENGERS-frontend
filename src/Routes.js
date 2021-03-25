import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Signup from "./Pages/Signup/Signup";
import Payment from "./Pages/Payment/Payment";
import Login from "./Pages/Login/Login";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/Payment" component={Payment} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

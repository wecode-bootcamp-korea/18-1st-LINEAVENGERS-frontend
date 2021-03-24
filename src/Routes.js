import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./Pages/Signup/Signup";
import Payment from "./Pages/Payment/Payment";
import Login from "./Pages/Login/Login";
import Main from "./Pages/Main/Main";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/Signup" component={Signup} />
          {/* <Route exact path ="/" */}
          <Route exact path="/Payment" component={Payment} />
          {/* <Route exact path="/product" component={Product} /> */}
        </Switch>
      </Router>
    );
  }
}

export default Routes;

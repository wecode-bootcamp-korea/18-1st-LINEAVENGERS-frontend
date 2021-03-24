import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Product from "./Pages/Product/Product";
import Signup from "./Pages/Signup/Signup";
import Payment from "./Pages/Payment/Payment";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/Login" component={Login} /> */}
          <Route exact path="/Signup" component={Signup} />

          <Route exact path="/Payment" component={Payment} />
          <Route exact path="/product" component={Product} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

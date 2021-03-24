import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Product from "./Pages/Product/Product";
import Signup from "./Pages/Signup/Signup";
import Payment from "./Pages/Payment/Payment";
import Login from "./Pages/Login/Login";
import MyPage from "./Pages/MyPage/MyPage";
import Main from "./Pages/Main/Main";
import Product from "./Pages/Product/Product";

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

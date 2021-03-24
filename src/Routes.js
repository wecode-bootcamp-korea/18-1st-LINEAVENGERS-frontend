import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Product from "./Pages/Product/Product";
import Signup from "./Pages/Signup/Signup";
import Payment from "./Pages/Payment/Payment";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import MyPage from "./Pages/MyPage/MyPage";
import Main from "./Pages/Main/Main";
import Product from "./Pages/Product/Product";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>

          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/mypage" component={MyPage} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Payment" component={Payment} />
          <Route exact path="/product" component={Product} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

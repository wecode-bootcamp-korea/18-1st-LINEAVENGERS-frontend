import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../src/Pages/Login";
import MyPage from "../src/Pages/MyPage";
import Main from "../src/Pages/Main";
import Product from "../src/Pages/Product";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/mypage" component={MyPage} />
          <Route exact path="/product" component={Product} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../src/Pages/Login/Login";
import MyPage from "../src/Pages/MyPage/MyPage";
import Main from "../src/Pages/Main/Main";
import Product from "../src/Pages/Product/Product";
import ProductDetail from "../src/Pages/ProductDetail/ProductDetail";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/mypage" component={MyPage} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/product/detail" component={ProductDetail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

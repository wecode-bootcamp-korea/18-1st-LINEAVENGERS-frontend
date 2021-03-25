import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../src/Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Payment from "./Pages/Payment/Payment";
import Main from "../src/Pages/Main/Main";
import MyPage from "../src/Pages/MyPage/MyPage";
import Product from "../src/Pages/Product/Product";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import QAModal from "./Pages/ProductDetail/QAContainer/QAModal/QAModal";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Payment" component={Payment} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/mypage" component={MyPage} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/product/detail/:id" component={ProductDetail} />
          <Route exact path="/QAModal" component={QAModal} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

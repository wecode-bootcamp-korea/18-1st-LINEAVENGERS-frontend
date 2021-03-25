import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import Product from "./Pages/Product/Product";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import QAModal from "./Pages/QAModal/QAModal";
import ShoppingBasket from "./Pages/MyPage/ShoppingBasket/ShoppingBasket";
import MyPageHeart from "./Pages/MyPage/MyPageHeart";
import Modal from "./Pages/MyPage/Modal";
import MyPage from "./Pages/MyPage/MyPage";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

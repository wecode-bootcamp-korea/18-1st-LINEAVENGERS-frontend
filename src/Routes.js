import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import MyPage from "./Pages/MyPage/MyPage";
import Main from "./Pages/Main/Main";
import Product from "./Pages/Product/Product";
import ShoppingBasket from "./Pages/MyPage/ShoppingBasket/ShoppingBasket";
import MyPageHeart from "./Pages/MyPage/MyPageHeart";
import Modal from "./Pages/MyPage/Modal";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/mypage" component={MyPage} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/shoppingbasket" component={ShoppingBasket} />
          <Route exact path="/mypageheart" component={MyPageHeart} />
          <Route exact path="/modal/" component={Modal} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

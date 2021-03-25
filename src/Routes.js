import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import Payment from "./Pages/Payment/Payment";
import Main from "./Pages/Main/Main";
import ShoppingBasket from "./Pages/MyPage/ShoppingBasket/ShoppingBasket";
import MyPageHeart from "./Pages/MyPage/MyPageHeart";
import Modal from "./Pages/MyPage/Modal";
import MyPage from "./Pages/MyPage/MyPage";
import Product from "./Pages/Product/Product";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import QAModal from "./Pages/ProductDetail/QAContainer/QAModal/QAModal";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Payment" component={Payment} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/mypage" component={MyPage} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/product/detail:id" component={ProductDetail} />
          <Route exact path="/QAModal" component={QAModal} />
          <Route exact path="/shoppingbasket" component={ShoppingBasket} />
          <Route exact path="/mypageheart" component={MyPageHeart} />
          <Route exact path="/modal/" component={Modal} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

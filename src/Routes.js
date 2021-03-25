import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
<<<<<<< HEAD
import Login from "../src/Pages/Login/Login";
import MyPage from "../src/Pages/MyPage/MyPage";
import Main from "../src/Pages/Main/Main";
import Product from "../src/Pages/Product/Product";
=======
import Main from "./Pages/Main/Main";
import Signup from "./Pages/Signup/Signup";
import Payment from "./Pages/Payment/Payment";
import Login from "./Pages/Login/Login";
import Product from "./Pages/Product/Product";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import QAModal from "./Pages/QAModal/QAModal";
import ShoppingBasket from "./Pages/MyPage/ShoppingBasket/ShoppingBasket";
import MyPageHeart from "./Pages/MyPage/MyPageHeart";
import Modal from "./Pages/MyPage/Modal";
import MyPage from "./Pages/MyPage/MyPage";
>>>>>>> c4793716f6417af3e0319328e0c6423256d2d9f2

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/Payment" component={Payment} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/product/detail" component={ProductDetail} />
          <Route exact path="/QAModal" component={QAModal} />
          <Route exact path="/mypage" component={MyPage} />
          <Route exact path="/shoppingbasket" component={ShoppingBasket} />
          <Route exact path="/mypageheart" component={MyPageHeart} />
          <Route exact path="/modal" component={Modal} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;


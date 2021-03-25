import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
<<<<<<< HEAD
=======
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
<<<<<<< HEAD
=======
          <Route exact path="/Payment" component={Payment} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/product/detail" component={ProductDetail} />
          <Route exact path="/QAModal" component={QAModal} />
          <Route exact path="/mypage" component={MyPage} />
          <Route exact path="/shoppingbasket" component={ShoppingBasket} />
          <Route exact path="/mypageheart" component={MyPageHeart} />
          <Route exact path="/modal" component={Modal} />
>>>>>>> c4793716f6417af3e0319328e0c6423256d2d9f2
        </Switch>
      </Router>
    );
  }
}

export default Routes;


import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./Pages/Signup/Signup";
import Payment from "./Pages/Payment/Payment";
import MyPage from "./Pages/MyPage/MyPage";
import Main from "./Pages/Main/Main";
import ShoppingBasket from "./Pages/MyPage/ShoppingBasket/ShoppingBasket";
import MyPageHeart from "./Pages/MyPage/MyPageHeart";
import Modal from "./Pages/MyPage/Modal";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/mypage" component={MyPage} />
          <Route exact path="/Payment" component={Payment} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/shoppingbasket" component={ShoppingBasket} />
          <Route exact path="/mypageheart" component={MyPageHeart} />
          <Route exact path="/modal/" component={Modal} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Product from "./Pages/Product/Product";
import Signup from "./Pages/Signup/Signup";
import Payment from "./Pages/Payment/Payment";
import Login from "./Pages/Login/Login";
// import MyPage from "./Pages/MyPage/MyPage";
import Main from "./Pages/Main/Main";
<<<<<<< HEAD
// import Product from "./Pages/Product/Product";
=======
import Product from "./Pages/Product/Product";
>>>>>>> 317ebc87538d8a41f5c3efa59daecaf672e01124

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
<<<<<<< HEAD
          <Route exact path="/login" component={Login} />
          <Route exact path="/main" component={Main} />
          {/* <Route exact path="/mypage" component={MyPage} /> */}
          {/* <Route exact path="/product" component={Product} /> */}
=======
          {/* <Route exact path="/Login" component={Login} /> */}
          <Route exact path="/Signup" component={Signup} />

          <Route exact path="/Payment" component={Payment} />
          <Route exact path="/product" component={Product} />
>>>>>>> 317ebc87538d8a41f5c3efa59daecaf672e01124
        </Switch>
      </Router>
    );
  }
}

export default Routes;

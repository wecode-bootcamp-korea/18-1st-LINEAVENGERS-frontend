import React, { Component } from "react";
import MyPageNav from "./MyPageNav";
import MyPageAside from "./MyPageAside";
import MyPageNone from "./MyPageNone";
import MyPageProduct from "./MyPageProduct";
import { URL } from "../../config";
import "./MyPage.scss";
import Footer from "../../Components/Footer/Footer";

class MyPage extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
    };
  }

  componentDidMount() {
    fetch(`${URL}/order/review`, {
      headers: {
        Authorization: localStorage.getItem("access_token"),
      },
    })
      .then(res => res.json())
      .then(res => this.setState({ productList: res.product_list }));
  }
  render() {
    return (
      <div className="myPage">
        <MyPageNav />
        <main className="myPageMain">
          <MyPageAside />
          {this.state.productList.length === 0 ? (
            <MyPageNone />
          ) : (
            <article className="myPageProduct">
              {this.state.productList.map(product => {
                return (
                  <MyPageProduct
                    id={product.product_id}
                    img={product.thumbnail_url}
                    name={product.product_name}
                    price={product.price}
                  />
                );
              })}
            </article>
          )}
        </main>
        <Footer />
      </div>
    );
  }
}

export default MyPage;

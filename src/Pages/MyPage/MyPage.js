import React, { Component } from "react";
import MyPageNav from "./MyPageNav";
import MyPageAside from "./MyPageAside";
import MyPageNone from "./MyPageNone";
import MyPageProduct from "./MyPageProduct";
import "./MyPage.scss";

class MyPage extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
    };
  }

  componentDidMount() {
    fetch("/Data/MyPageProduct.json")
      .then(res => res.json())
      .then(res => this.setState({ productList: res }));
  }

  render() {
    console.log(this.state.productList);
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
                    id={product.id}
                    img={product.img}
                    name={product.name}
                    price={product.price}
                  />
                );
              })}
            </article>
          )}
        </main>
      </div>
    );
  }
}

export default MyPage;

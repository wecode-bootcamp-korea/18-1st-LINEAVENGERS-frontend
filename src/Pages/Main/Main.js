import React, { Component } from "react";
// import ReactDOM from "react-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import SlickBanner from "./SlickBanner/SlickBanner";
import Coupon from "./Coupon/Coupon";
import ProductList from "./ProductList/ProductList";
import "./Main.scss";

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      banner: [],
      products: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/Data/MainBannerData.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ banner: data });
      });

    fetch("http://localhost:3000/Data/ProductsData.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ products: data });
      });
  }

  render() {
    return (
      <div className="main">
        <main className="mainContainer">
          <SlickBanner itsBanner={this.state.banner} />
          <Header />

          <article className="hotCategory">
            <p className="title">새로 나왔어요</p>
            <ProductList products={this.state.products} />
          </article>
          <Coupon />
          <article className="products">
            <p className="title">마음껏 둘러보세요</p>
            <ProductList products={this.state.products} />
          </article>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Main;

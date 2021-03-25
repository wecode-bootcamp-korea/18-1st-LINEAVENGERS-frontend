import React, { Component } from "react";
<<<<<<< HEAD

export class Main extends Component {
  render() {
    return <div></div>;
=======
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
    fetch("Data/MainBannerData.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ banner: data });
      });

    fetch("Data/ProductsData.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ products: data });
      });
  }

  render() {
    const { banner, products } = this.state;
    return (
      <div className="main">
        <main className="mainContainer">
          <SlickBanner itsBanner={banner} />
          <Header />

          <article className="hotCategory">
            <p className="title">새로 나왔어요</p>
            <ProductList products={products} />
          </article>
          <Coupon />
          <article className="products">
            <p className="title">마음껏 둘러보세요</p>
            <ProductList products={products} />
          </article>
        </main>
        <Footer />
      </div>
    );
>>>>>>> c4793716f6417af3e0319328e0c6423256d2d9f2
  }
}

export default Main;

import React, { Component } from "react";
// import ReactDOM from "react-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ProductList from "./ProductList/ProductList";
import "./Main.scss";
import SlickBanner from "./SlickBanner/SlickBanner";

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
    console.log("banner >>>", this.state.banner);

    return (
      <div className="main">
        <main className="mainContainer">
          <div
            className="banner"
            style={{
              /*JSX에서 인라인 속성으로 style (background-img 주기.*/
              backgroundImage: `url("https://shop-phinf.pstatic.net/20210201_24/1612164845849t0Vnf_JPEG/main_bn_pc_G.jpg")`,
            }}
          >
            <Header />
            <div className="arrowContainer">
              <div className="leftArrow">
                <img
                  className="arrows"
                  alt="previous product"
                  src="../Images/Icons/left_arrow.png"
                />
              </div>
              <div className="rightArrow">
                <img
                  className="arrows"
                  alt="next product"
                  src="../Images/Icons/right_arrow.png"
                />
              </div>
              <div className="copyContainer">
                <p className="bigCopy">
                  귀여운 조명이
                  <br />
                  나를 감싸네
                </p>
                <p className="smallCopy">BT21 BABY 포터블 무드 램프</p>
              </div>
            </div>
          </div>
          <article className="hotCategory">
            <p className="title">새로 나왔어요</p>
            <ProductList products={this.state.products} />
          </article>
          <article className="products">
            <p className="title">마음껏 둘러보세요</p>
            <ProductList products={this.state.products} />
          </article>
          <SlickBanner itsBanner={this.state.banner} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default Main;

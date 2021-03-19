import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import CardList from "./CardList/CardList";
import "./Main.scss";

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/Data/ProductsData.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ products: data });
      });
  }

  handelSlide = () => {};

  render() {
    return (
      <div className="main">
        <main className="mainContainer">
          <div className="banner">
            <Header />
            <div className="arrowContainer">
              <div className="leftArrow" onClick={this.handleSlide}>
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
            <CardList products={this.state.products} />
          </article>
          <article className="products">
            <p className="title">마음껏 둘러보세요</p>
            <CardList products={this.state.products} />
          </article>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Main;

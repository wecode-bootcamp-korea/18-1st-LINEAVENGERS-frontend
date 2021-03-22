import React, { Component } from "react";
import ContentTop from "./ContentTop/ContentTop";
import "./ProductDetail.scss";

class ProductDetail extends Component {
  render() {
    return (
      <>
        <header></header>
        <div className="productDetailContainer">
          <ContentTop />
          <section className="ContentBottom"></section>
        </div>
        <footer></footer>
      </>
    );
  }
}

export default ProductDetail;

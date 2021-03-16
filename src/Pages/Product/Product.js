import React, { Component } from "react";
import Content from "./Content/Content";
import ProductList from "./ProductList/ProductList";
import ProductDetail from "../../Components/Nav/ProductDetail/ProductDetail";
import "./Product.scss";

export class Product extends Component {
  render() {
    return (
      <main className="product">
        <div className="product-container">
          <Content />
          <ProductList />
          <ProductDetail />
        </div>
      </main>
    );
  }
}

export default Product;

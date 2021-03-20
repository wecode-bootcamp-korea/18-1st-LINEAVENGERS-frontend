import React, { Component } from "react";
import Product from "./Product/Product";
import "./ProductList.scss";

export class ProductList extends Component {
  render() {
    return (
      <div className="productList">
        {this.props.products.map(product => {
          return (
            <Product
              key={product.id}
              id={product.id}
              price={product.price}
              productName={product.productName}
              img={product.img}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductList;

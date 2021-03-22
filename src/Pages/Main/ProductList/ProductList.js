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
              key={product.productId}
              id={product.productId}
              price={product.price}
              productName={product.productName}
              img={product.thumbnailUrl}
              favorite={product.favorite}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductList;

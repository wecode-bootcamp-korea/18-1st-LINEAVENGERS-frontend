import React, { Component } from "react";
import Product from "./Product/Product";
import "./ProductList.scss";

export class ProductList extends Component {
  render() {
    return (
      <div className="productList">
        {this.props.products.map(productObj => {
          return (
            <Product
              key={productObj.productId}
              id={productObj.productId}
              price={productObj.price}
              productName={productObj.productName}
              img={productObj.thumbnailUrl}
              favorite={productObj.favorite}
              type={productObj.type}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductList;

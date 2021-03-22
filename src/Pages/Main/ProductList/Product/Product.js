import React, { Component } from "react";
import "./Product.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export class Product extends Component {
  render() {
    return (
      <div className="productContainer">
        <img className="productImg" src={this.props.img} alt="Product Img" />
        <FontAwesomeIcon icon="faHeart" />
        <p className="price">{this.props.price}원</p>
        <p>{this.props.productName}</p>
      </div>
    );
  }
}

export default Product;

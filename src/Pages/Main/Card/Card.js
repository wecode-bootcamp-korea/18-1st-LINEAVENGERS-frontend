import React, { Component } from "react";
import "./Card.scss";

export class Card extends Component {
  render() {
    const { img, price, productName } = this.props;
    return (
      <div className="cardContainer">
        <img className="productImg" src={img} alt="Product Img" />
        <p className="price">{price}원</p>
        <p>{productName}</p>
      </div>
    );
  }
}

export default Card;

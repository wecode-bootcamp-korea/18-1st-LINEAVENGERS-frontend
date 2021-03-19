import React, { Component } from "react";
import "./Card.scss";

export class Card extends Component {
  render() {
    return (
      <div className="cardContainer">
        <img className="productImg" src={this.props.img} alt="Product Img" />
        <p className="price">{this.props.price}원</p>
        <p>{this.props.productName}</p>
      </div>
    );
  }
}

export default Card;

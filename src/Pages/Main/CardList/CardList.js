import React, { Component } from "react";
import Card from "../Card/Card";
import "./CardList.scss";

export class CardList extends Component {
  render() {
    return (
      <div className="cardList">
        {this.props.products.map(product => {
          return (
            <Card
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

export default CardList;

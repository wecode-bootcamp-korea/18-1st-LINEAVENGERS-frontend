import React, { Component } from "react";
import "./NormalPoint.scss";

class NormalPoint extends Component {
  render() {
    const { price } = this.props;
    const convertPrice = Math.floor((price * 10) / 1000).toLocaleString();
    return (
      <div className="normalPoint">
        <span className="normalTitle">기본적립</span>
        <em className="normalNumber">{convertPrice}원</em>
      </div>
    );
  }
}

export default NormalPoint;

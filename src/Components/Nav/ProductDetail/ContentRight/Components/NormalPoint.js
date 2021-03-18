import React, { Component } from "react";
import "./NormalPoint.scss";

class NormalPoint extends Component {
  render() {
    const { price } = this.props;
    const convertPrice = ((price * 10) / 1000).toLocaleString();
    return (
      <div className="normal-point">
        <span className="normal-title">기본적립</span>
        <em className="normal-number">{convertPrice}원</em>
      </div>
    );
  }
}

export default NormalPoint;

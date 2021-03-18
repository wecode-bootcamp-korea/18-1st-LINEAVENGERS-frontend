import React, { Component } from "react";
import "./MaxPoint.scss";

class MaxPoint extends Component {
  render() {
    const { price } = this.props;
    const convertPrice = ((price * 17) / 1000).toLocaleString();
    return (
      <div className="max-point">
        <span className="max-title">최대 적립 포인트</span>
        <div className="max-price">
          <span className="max-value">
            {convertPrice}
            <em>원</em>
          </span>
          <button>?</button>
        </div>
      </div>
    );
  }
}

export default MaxPoint;

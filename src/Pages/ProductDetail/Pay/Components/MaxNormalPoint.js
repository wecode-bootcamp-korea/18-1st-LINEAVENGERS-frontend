import React, { Component } from "react";
import "./MaxNormalPoint.scss";

class MaxNormalPoint extends Component {
  render() {
    const { finalPrice } = this.props;
    const maxPrice = Math.floor((finalPrice * 17) / 1000 / 10) * 10;
    const normalPrice = Math.floor((finalPrice * 10) / 1000 / 10) * 10;

    return (
      <div className="maxNormalWrap">
        <p className="maxPointInfo">
          <span className="maxTitle">최대 적립 포인트</span>
          <span className="maxValue">
            <em>{Number(maxPrice).toLocaleString()}</em>원
            <button className="infoBtn">?</button>
          </span>
        </p>
        <p className="normalPointInfo">
          <span className="normalTitle">기본 적립</span>
          <span className="normalValue">
            <em>{Number(normalPrice).toLocaleString()}</em>원
          </span>
        </p>
      </div>
    );
  }
}

export default MaxNormalPoint;

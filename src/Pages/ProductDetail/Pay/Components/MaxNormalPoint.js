import React, { Component } from "react";
import "./MaxNormalPoint.scss";

class MaxNormalPoint extends Component {
  render() {
    return (
      <div className="maxNormalWrap">
        <p className="maxPointInfo">
          <span className="maxTitle">최대 적립 포인트</span>
          <span className="maxValue">
            <em>359</em>원<button className="infoBtn">?</button>
          </span>
        </p>
        <p className="normalPointInfo">
          <span className="normalTitle">기본 적립</span>
          <span className="normalValue">
            <em>209</em>원
          </span>
        </p>
      </div>
    );
  }
}

export default MaxNormalPoint;

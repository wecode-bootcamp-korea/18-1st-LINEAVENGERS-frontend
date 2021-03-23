import React, { Component } from "react";
import "./SelectOption.scss";

class SelectOption extends Component {
  render() {
    return (
      <div className="selectWrap">
        <div className="selectBox">사이즈</div>
        <div className="showTotal">
          <span>
            총 상품 금액<button className="infoBtn">?</button>
          </span>
          <span>
            총 수량 0 개<em>0원</em>
          </span>
        </div>
      </div>
    );
  }
}

export default SelectOption;

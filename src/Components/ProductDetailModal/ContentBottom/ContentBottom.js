import React, { Component } from "react";
import "./ContentBottom.scss";

class ContentBottom extends Component {
  render() {
    return (
      <div className="contentBottom">
        <div className="btnWrap">
          <button className="detailBtn">상품 상세보기</button>
          <button className="favoriteBtn">찜</button>
        </div>
      </div>
    );
  }
}

export default ContentBottom;

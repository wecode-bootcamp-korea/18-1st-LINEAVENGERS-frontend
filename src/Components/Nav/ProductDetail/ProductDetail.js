import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./ProductDetail.scss";

class ProductDetail extends Component {
  render() {
    return (
      <div className="product-detail">
        <div className="detail-container">
          <div>
            <h1>상세보기</h1>
            <FontAwesomeIcon icon={faTimes} />
          </div>
          <div>
            <div></div>
            <div>
              <h2>라인프렌즈 브라운 머그컵</h2>
              <p>20,000원</p>
              <div>
                <p>라인프렌즈 고객을 위한 혜택</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;

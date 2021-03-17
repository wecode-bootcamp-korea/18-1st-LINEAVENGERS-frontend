import React, { Component } from "react";
import "./ProductDetail.scss";

class ProductDetail extends Component {
  render() {
    return (
      <div className="product-detail">
        <div className="detail-container">
          <div className="detail-top">
            <h1 className="top-title">상세보기</h1>
            <span className="close-btn"></span>
          </div>
          <div className="detail-content">
            <div className="content-left"></div>
            <div className="content-right">
              <h3 className="right-title">라인프렌즈 브라운 머그컵</h3>
              <p className="right-price">20,000원</p>
              <div className="right-recommend">
                <p className="recommend-title">라인프렌즈 고객을 위한 혜택</p>
                <div className="recommend-point">
                  <div className="max-point">
                    <span className="max-title">최대 적립 포인트</span>
                    <div className="max-price">
                      <span className="max-value">
                        340<em>원</em>
                      </span>
                      <button>?</button>
                    </div>
                  </div>
                  <div className="normal-point">
                    <span className="normal-title">기본적립</span>
                    <em className="normal-number">340원</em>
                  </div>
                  <div>
                    <div>
                      <span>
                        <em>TIP.</em>포인트 더 받는 방법
                      </span>
                      <span>
                        +최대 320<em>원</em>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;

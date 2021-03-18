import React, { Component } from "react";
import ContentLeft from "./ContentLeft/ContentLeft";
import ContentRight from "./ContentRight/ContentRight";
import "./ProductDetail.scss";

class ProductDetail extends Component {
  render() {
    const { data } = this.props;
    const leftData = {
      imgUrls: data.imgUrls,
      reviews: data.reviews,
    };
    const rightData = {
      name: data.name,
      options: data.options,
      price: data.price,
      type: data.type,
    };
    return (
      <div className="product-detail">
        <div className="detail-container">
          <div className="detail-top">
            <h1 className="top-title">상세보기</h1>
            <span className="close-btn"></span>
          </div>
          <div className="detail-content">
            <ContentLeft leftData={leftData} />
            <ContentRight rightData={rightData} />
          </div>
        </div>
      </div>
    );
  }
}
export default ProductDetail;

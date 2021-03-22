import React, { Component } from "react";
import ContentLeft from "./ContentLeft/ContentLeft";
import ContentRight from "./ContentRight/ContentRight";
import "./ProductDetailModal.scss";

class ProductDetailModal extends Component {
  render() {
    const { imageUrls, name, options, price, reviews, type } = this.props.data;
    const leftData = {
      imageUrls: imageUrls,
      reviews: reviews,
    };
    const rightData = {
      name: name,
      options: options,
      price: price,
      type: type,
    };
    return (
      <div className="productDetail">
        <div className="detailContainer">
          <div className="detailTop">
            <h1 className="topTitle">간략보기</h1>
            <span className="closeBtn"></span>
          </div>
          <div className="detailContent">
            <ContentLeft leftData={leftData} />
            <ContentRight rightData={rightData} />
          </div>
        </div>
      </div>
    );
  }
}
export default ProductDetailModal;

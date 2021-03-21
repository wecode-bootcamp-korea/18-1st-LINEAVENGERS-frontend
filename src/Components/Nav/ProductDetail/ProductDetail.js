import React, { Component } from "react";
import ContentLeft from "./ContentLeft/ContentLeft";
import ContentRight from "./ContentRight/ContentRight";
import "./ProductDetail.scss";

class ProductDetail extends Component {
  render() {
    const { imgUrls, reviews, name, options, price, type } = this.props.data;
    const leftData = {
      imgUrls: imgUrls,
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
            <h1 className="topTitle">상세보기</h1>
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
export default ProductDetail;

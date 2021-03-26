import React, { Component } from "react";
import "./ProductImgList.scss";

class ProductImgList extends Component {
  render() {
    const { imageUrls } = this.props;

    return (
      <div className="productImgList">
        {imageUrls.map((url, index) => (
          <img key={index} src={url} alt="상품 이미지" />
        ))}
      </div>
    );
  }
}

export default ProductImgList;

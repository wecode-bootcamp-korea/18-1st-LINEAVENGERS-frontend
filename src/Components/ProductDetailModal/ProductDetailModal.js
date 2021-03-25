import React, { Component } from "react";
import ContentLeft from "./ContentLeft/ContentLeft";
import ContentRight from "./ContentRight/ContentRight";
import "./ProductDetailModal.scss";

class ProductDetailModal extends Component {
  render() {
    const { modalPopCheck, modalData, handleModal, addCart } = this.props;
    const {
      imageUrls,
      name,
      options,
      price,
      reviews,
      type,
      productId,
    } = modalData;
    const leftData = {
      imageUrls: imageUrls,
      reviews: reviews,
    };
    const rightData = {
      name: name,
      options: options,
      price: price,
      type: type,
      productId,
    };

    return (
      <div className={`productDetail ${modalPopCheck && "active"}`}>
        <div className="detailContainer">
          <div className="detailTop">
            <h1 className="topTitle">간략보기</h1>
            <span className="closeBtn" onClick={handleModal}></span>
          </div>
          <div className="detailContent">
            <ContentLeft leftData={leftData} />
            <ContentRight rightData={rightData} addCart={addCart} />
          </div>
        </div>
      </div>
    );
  }
}
export default ProductDetailModal;

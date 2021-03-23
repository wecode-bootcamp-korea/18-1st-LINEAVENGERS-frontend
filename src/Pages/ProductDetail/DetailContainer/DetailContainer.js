import React, { Component } from "react";
import BenefitBanner from "./Components/BenefitBanner";
import DeliverBanner from "./Components/DeliverBanner";
import ProductImgList from "./Components/ProductImgList";
import "./DetailContainer.scss";

class DetailContainer extends Component {
  render() {
    return (
      <section className="detailContainer">
        <ul className="detailTab">
          <li className="tabList">상세정보</li>
          <li className="tabList">리뷰</li>
          <li className="tabList">QA 0</li>
          <li className="tabList">반품/교환정보</li>
        </ul>
        <DeliverBanner />
        <BenefitBanner />
        <ProductImgList />
      </section>
    );
  }
}

export default DetailContainer;

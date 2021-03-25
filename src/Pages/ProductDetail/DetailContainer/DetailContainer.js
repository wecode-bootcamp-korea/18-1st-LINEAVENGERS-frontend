import React, { Component } from "react";
import BenefitBanner from "./Components/BenefitBanner";
import DeliverBanner from "./Components/DeliverBanner";
import ProductImgList from "./Components/ProductImgList";
import "./DetailContainer.scss";

class DetailContainer extends Component {
  render() {
    const { tabClick, tabIndex, reviews, imageUrls } = this.props;
    return (
      <section className="detailContainer" ref={this.props.DetailContainer}>
        <ul className="detailTab">
          {tabList.map((list, index) => (
            <li
              key={list.id}
              className={`tabList ${tabIndex === index && "active"}`}
              onClick={e => {
                tabClick(e, list.id);
              }}
            >
              {list.id === 1 ? `${list.title} ${reviews.length}` : list.title}
            </li>
          ))}
        </ul>
        <DeliverBanner />
        <BenefitBanner />
        <ProductImgList imageUrls={imageUrls} />
      </section>
    );
  }
}

const tabList = [
  { id: 0, title: "상세정보" },
  { id: 1, title: "리뷰" },
  { id: 2, title: "Q&A" },
  { id: 3, title: "반품/교환정보" },
];
export default DetailContainer;

import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./ListItem.scss";

class ListItem extends Component {
  render() {
    console.log(this.props);
    const { grade, imgUrl, like, name, price, review, type } = this.props.data;
    return (
      <li className="list-item">
        <div className="item-img best">
          <img src={imgUrl} alt="상품 이미지" />
          <div className="item-choice">
            <FontAwesomeIcon className="choice-like" icon={faHeart} />
            <FontAwesomeIcon className="chocie-detail" icon={faPlus} />
          </div>
        </div>
        <div className="item-title">
          <p class="title-name">{name}</p>
          <button class="title-heart">
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>
        <div className="item-price">
          <span className="final-price">3,600원</span>
          <span className="before-price">4,000원</span>
          <span className="sale-percent">{price.sale && `${price.sale}%`}</span>
        </div>
        <div className="item-data">
          <span className="data-review">
            리뷰 <em>1</em>
          </span>
          <span className="data-grade">
            평점 <em>5.0</em>/<em>5</em>
          </span>
        </div>
      </li>
    );
  }
}

export default ListItem;

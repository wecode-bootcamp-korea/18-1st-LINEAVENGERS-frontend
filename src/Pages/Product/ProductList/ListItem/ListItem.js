import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./ListItem.scss";

class ListItem extends Component {
  render() {
    const {
      data: {
        productId,
        rating,
        thumbnailUrl,
        favorite,
        productName,
        price,
        review,
        type,
      },
      handleFavorite,
    } = this.props;

    return (
      <li className="listItem">
        <div
          className={`itemImg ${
            type === "NORMAL"
              ? ""
              : type === "BEST"
              ? "best"
              : type === "NEW"
              ? "new"
              : "top"
          }`}
        >
          <img src={thumbnailUrl} alt="상품 이미지" />
          <div className="itemChoice">
            <FontAwesomeIcon
              className={`choiceLike ${favorite && "checked"}`}
              icon={faHeart}
              onClick={e => {
                handleFavorite(e, productId);
              }}
            />
            <FontAwesomeIcon className="chocieDetail" icon={faPlus} />
          </div>
        </div>
        <div class="titlePriceWrap">
          <div className="itemTitle">
            <p class="titleName">{productName}</p>
            <button class={`titleHeart ${favorite && "checked"}`}>
              <FontAwesomeIcon
                icon={faHeart}
                onClick={e => {
                  handleFavorite(e, productId);
                }}
              />
            </button>
          </div>
          <div className="itemPrice">
            <span className="finalPrice">
              {price.sale
                ? `${Number(
                    price.normal - (price.normal * price.sale) / 100
                  ).toLocaleString()}원`
                : `${Number(price.normal).toLocaleString()}원`}
            </span>
            <span className="beforePrice">
              {price.sale !== 0 && `${Number(price.normal).toLocaleString()}원`}
            </span>
            <span className="salePercent">
              {price.sale !== 0 && `${price.sale}%`}
            </span>
          </div>
        </div>
        <div className="itemData">
          <span className="dataReview">
            리뷰 <em>{review}</em>
          </span>
          <span className="dataGrade">
            평점 <em>{Number(rating).toFixed(1)}</em>/<em>5</em>
          </span>
        </div>
      </li>
    );
  }
}

export default ListItem;

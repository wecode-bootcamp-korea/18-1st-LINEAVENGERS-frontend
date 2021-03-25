import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faPlus, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import "./ListItem.scss";

class ListItem extends Component {
  state = {
    favoriteCheck: this.props.data.favorite ? true : false,
  };

  handleFavorite = async (e, id) => {
    await fetch("http://10.58.1.71:8000/mypage/favorite", {
      method: "POST",
      body: JSON.stringify({
        product: id,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === "no authorization") {
          message = "no authorization";
        }
      });
    let message = "";
    if (message === "no authorization") {
      alert("로그인이 필요합니다.");
      return;
    }
    const { favoriteCheck } = this.state;
    this.setState({
      favoriteCheck: !favoriteCheck,
    });
  };

  render() {
    const {
      data: {
        productId,
        rating,
        thumbnailUrl,
        productName,
        price,
        review,
        type,
      },
      moveToProduct,
    } = this.props;
    const { favoriteCheck } = this.state;
    const itemTag = {
      NORMAL: "",
      BEST: "best",
      NEW: "new",
      TOP: "top",
    };
    return (
      <li
        className="listItem"
        onClick={e => {
          moveToProduct(e, productId);
        }}
      >
        <div className={`itemImg ${itemTag[type]}`}>
          <img src={thumbnailUrl} alt="상품 이미지" />
          <div className={`itemChoice ${favoriteCheck && "checked"}`}>
            <button
              className="choiceLike"
              onClick={e => {
                this.handleFavorite(e, productId);
              }}
            >
              <FontAwesomeIcon icon={faHeart} />
            </button>
            <button className="choiceDetail">
              <FontAwesomeIcon icon={faShoppingBasket} />
            </button>
          </div>
        </div>
        <div class="titlePriceWrap">
          <div className="itemTitle">
            <p class="titleName">{productName}</p>
            <button
              class={`titleHeart ${favoriteCheck && "checked"}`}
              onClick={e => {
                this.handleFavorite(e, productId);
              }}
            >
              <FontAwesomeIcon icon={faHeart} />
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

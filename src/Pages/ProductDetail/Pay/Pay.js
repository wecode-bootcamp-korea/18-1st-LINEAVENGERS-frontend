import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import MaxNormalPoint from "./Components/MaxNormalPoint";
import MorePointInfo from "./Components/MorePointInfo";
import SelectOption from "./Components/SelectOption";
import "./Pay.scss";

class Pay extends Component {
  render() {
    const {
      PayData: { name, options, price, type, productId },
      selectList,
      clickCount,
      countChange,
      addSelect,
      deleteSelect,
      shoppingKeep,
    } = this.props;

    const finalPrice =
      price.sale !== 0
        ? price.normal - (price.normal * price.sale) / 100
        : price.normal;

    return (
      <div className="pay">
        <h1 className="productTitle">{name}</h1>
        <p className="priceInfo">
          <span className="salePercent">{price.sale !== 0 && price.sale}%</span>
          <span className="priceResult">
            <em>
              {Number(price.sale !== 0 && price.normal).toLocaleString()}원
            </em>
            {Number(finalPrice).toLocaleString()}원
          </span>
        </p>
        <div className="pointInfoBox">
          <p className="pointInfoTitle">라인 어벤져스 고객을 위한 혜택</p>
          <MaxNormalPoint finalPrice={finalPrice} />
          <MorePointInfo finalPrice={finalPrice} />
        </div>
        <div className="adBanner">포인트 최대 5% 적립</div>
        <p className="cardInfo">
          <span>무이자할부</span>
          <span>카드 자세히보기</span>
          <button className="infoBtn">?</button>
        </p>
        <ul className="deliverInfo">
          <li>
            <span>택배배송</span>
            <span>3000</span>원<em>(주문시 결제)</em>
          </li>
          <li>30,000원 이상 구매 시 무료</li>
        </ul>
        <SelectOption
          type={type}
          price={finalPrice}
          options={options}
          selectList={selectList}
          countChange={countChange}
          clickCount={clickCount}
          addSelect={addSelect}
          deleteSelect={deleteSelect}
        />
        <ul className="choiceBox">
          <li>
            <span>N</span>구매하기
          </li>
          <li>
            <FontAwesomeIcon icon={faComment} />
            톡톡문의
          </li>
          <li
            onClick={e => {
              shoppingKeep(e, options.sizeId, productId, selectList);
            }}
          >
            장바구니
          </li>
          <li>찜하기</li>
        </ul>
        <p className="safeTip">
          <FontAwesomeIcon icon={faInfoCircle} />
          쇼핑할 때 필독<span>안전거래TIP</span>
        </p>
      </div>
    );
  }
}

export default Pay;

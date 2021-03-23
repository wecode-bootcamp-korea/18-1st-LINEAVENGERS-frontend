import { faInfo, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import MaxNormalPoint from "./Components/MaxNormalPoint";
import MorePointInfo from "./Components/MorePointInfo";
import SelectOption from "./Components/SelectOption";
import "./Pay.scss";

class Pay extends Component {
  render() {
    return (
      <div className="pay">
        <h1 className="productTitle">라인프렌즈 미니브라운 마우스 패드</h1>
        <p className="priceInfo">
          <span className="salePercent">30%</span>
          <span className="priceResult">
            <em>29,900원</em>20,930원
          </span>
        </p>
        <div className="pointInfoBox">
          <p className="pointInfoTitle">라인 어벤져스 고객을 위한 혜택</p>
          <MaxNormalPoint />
          <MorePointInfo />
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
        <SelectOption />
        <ul className="choiceBox">
          <li>구매하기</li>
          <li>톡톡문의</li>
          <li>장바구니</li>
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

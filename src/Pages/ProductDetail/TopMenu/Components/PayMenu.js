import React, { Component } from "react";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PayMenu.scss";
import SelectItem from "./SelectItem";
class PayMenu extends Component {
  state = {
    optionsOpen: false,
  };

  optionToggle = e => {
    const { optionsOpen } = this.state;
    this.setState({
      optionsOpen: !optionsOpen,
    });
  };

  render() {
    const {
      options,
      type,
      price,
      productId,
      selectList,
      addSelect,
      deleteSelect,
      clickCount,
      countChange,
      shoppingKeep,
    } = this.props;
    const { optionsOpen } = this.state;

    const finalPrice =
      price.sale !== 0
        ? price.normal - (price.normal * price.sale) / 100
        : price.normal;

    let totalPrice = 0;
    let totalCounts = 0;

    selectList.forEach(list => {
      totalPrice += list.price * list.countValue;
      totalCounts += list.countValue;
    });

    return (
      <ul className="payMenu">
        <li className="deliverWrap">
          <div>
            <p>
              <span>택배배송</span>
              <span>
                <em>3000</em>원
              </span>
              <span>(주문시 결제)</span>
            </p>
            <span>30,000원 이상 구매 시 무료</span>
          </div>
        </li>
        <li className={`selectWrap ${optionsOpen && "checked"}`}>
          <div onClick={this.optionToggle}>{type}</div>
          <ul>
            <li
              onClick={e => {
                this.optionToggle();
                addSelect(e, options.name, finalPrice);
              }}
            >
              {options.name}
            </li>
          </ul>
        </li>
        <li className="countWrap">
          <ul className="selectBox">
            {selectList.length !== 0 &&
              selectList.map((list, index) => (
                <SelectItem
                  key={index}
                  list={list}
                  finalPrice={finalPrice}
                  deleteSelect={deleteSelect}
                  clickCount={clickCount}
                  countChange={countChange}
                />
              ))}
          </ul>
          <p className="totalValue">총 수량 {totalCounts}개</p>
          <p className="totalWrap">
            <span>
              총 상품 금액 <button className="InfoBtn">?</button>
            </span>
            <span>{Number(totalPrice).toLocaleString()} 원</span>
          </p>
          <ul className="choiceWrap">
            <li>
              <em>N</em>구매하기
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
          <span className="tipInfo">
            <FontAwesomeIcon icon={faInfoCircle} />
            쇼핑할 때 필독 <em>안전거래TIP</em>
          </span>
        </li>
      </ul>
    );
  }
}

export default PayMenu;

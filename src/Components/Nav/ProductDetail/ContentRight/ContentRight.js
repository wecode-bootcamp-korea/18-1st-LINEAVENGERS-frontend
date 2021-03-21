/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import MorePoint from "./Components/MorePoint";
import MaxPoint from "./Components/MaxPoint";
import NormalPoint from "./Components/NormalPoint";
import Select from "./Select/Select";
import Choice from "./Choice/Chocie";
import Price from "./Price/Price";
import "./ContentRight.scss";

class ContentRight extends Component {
  state = {
    totalPrice: 0,
    selectList: [],
  };

  handleCount = (e, id, count) => {
    const { selectList } = this.state;

    this.setState({
      selectList: selectList.map(list => {
        if (list.id === id) {
          return { ...list, countValue: count };
        } else return list;
      }),
    });
  };

  addSelect = (e, id, option) => {
    const { price } = this.props.rightData;
    const { selectList } = this.state;
    let duplicate = false;

    for (let i = 0; i < selectList.length; i++) {
      if (selectList[i].option === option) {
        alert("동일한 품목이 있습니다!");
        duplicate = false;
        return;
      }
    }
    const selectData = {
      id: id,
      option: option,
      price: price,
      countValue: 1,
    };

    this.setState({
      selectList: [...selectList, selectData],
    });
  };

  deleteSelect = (e, id) => {
    const { selectList } = this.state;
    this.setState({
      selectList: selectList.filter(select => select.id !== id),
    });
  };

  render() {
    const { name, options, price, type } = this.props.rightData;
    const { selectList } = this.state;

    return (
      <div className="contentRight">
        <h3 className="rightTitle">{name}</h3>
        <p className="rightPrice">{Number(price).toLocaleString()}원</p>
        <div className="rightRecommend">
          <p className="recommendTitle">라인프렌즈 고객을 위한 혜택</p>
          <div className="recommendPoint">
            <MaxPoint price={price} />
            <NormalPoint price={price} />
            <MorePoint price={price} />
          </div>
        </div>
        <div className="membershipAd">
          <div className="adLeft">
            <span className="adNLogo">N</span>
            <span className="adInfo">
              MY단골 2% + 추가 2% = <em>최대 4% 적립!</em>
            </span>
          </div>
        </div>
        <div className="deliverBox">
          <span>무이자 할부</span>
        </div>
        <div className="deliverBox">
          <p>
            <span className="deliverWay">택배배송</span>
            <span className="deliverPrice">
              3000원
              <em> (주문시 결제)</em>
            </span>
          </p>
          <span className="deliverInfo">30,000원 이상 구매 시 무료</span>
        </div>
        <Select
          options={options}
          type={type}
          handleCount={this.handleCount}
          addSelect={this.addSelect}
          deleteSelect={this.deleteSelect}
          selectList={selectList}
        />
        <Price selectList={selectList} />
        <Choice />
      </div>
    );
  }
}

export default ContentRight;

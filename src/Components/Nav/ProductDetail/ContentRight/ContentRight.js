import React, { Component } from "react";
import MorePoint from "./Components/MorePoint";
import MaxPoint from "./Components/MaxPoint";
import NormalPoint from "./Components/NormalPoint";
import Select from "./Select/Select";
import Choice from "./Choice/Chocie";
import "./ContentRight.scss";
import Price from "./Price/Price";

class ContentRight extends Component {
  state = {
    totalPrice: 0,
    selectList: [],
  };

  handleCount = (e, id) => {
    const { className } = e.target;
    const { selectList } = this.state;
    const btnType = className.split(" ")[1];
    let countCheck = true;

    selectList.forEach(select => {
      if (select.id === id) {
        countCheck =
          select.count === 1 ? (btnType === "remove" ? false : true) : true;
        return;
      }
    });

    if (!countCheck) {
      alert("1개 이상부터 구매할 수 있습니다!");
      return;
    }

    this.setState({
      selectList: selectList.map(list => {
        if (list.id === id) {
          if (btnType === "add") return { ...list, count: list.count + 1 };
          else return { ...list, count: list.count - 1 };
        }
      }),
    });
  };

  addSelect = (e, id, option) => {
    const { price } = this.props.rightData;
    const { selectList } = this.state;
    let duplicate = false;

    selectList.forEach(list => {
      if (list.option === option) {
        alert("동일한 품목이 있습니다!");
        duplicate = true;
        return;
      } else duplicate = false;
    });

    if (duplicate) return false;

    const selectData = {
      id: id,
      option: option,
      price: price,
      count: 1,
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
      <div className="content-right">
        <h3 className="right-title">{name}</h3>
        <p className="right-price">{Number(price).toLocaleString()}원</p>
        <div className="right-recommend">
          <p className="recommend-title">라인프렌즈 고객을 위한 혜택</p>
          <div className="recommend-point">
            <MaxPoint price={price} />
            <NormalPoint price={price} />
            <MorePoint price={price} />
          </div>
        </div>
        <div className="membership-ad">
          <div className="ad-left">
            <span className="ad-NLogo">N</span>
            <span className="ad-info">
              MY단골 2% + 추가 2% = <em>최대 4% 적립!</em>
            </span>
          </div>
        </div>
        <div className="deliver-box">
          <span>무이자 할부</span>
        </div>
        <div className="deliver-box">
          <p>
            <span className="deliver-way">택배배송</span>
            <span className="deliver-price">
              3000원
              <em> (주문시 결제)</em>
            </span>
          </p>
          <span className="deliver-info">30,000원 이상 구매 시 무료</span>
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

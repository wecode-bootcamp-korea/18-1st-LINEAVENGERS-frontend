import React, { Component } from "react";
import SelectCount from "./SelectCount";
import "./SelectOption.scss";

class SelectOption extends Component {
  state = {
    optionToggle: false,
  };

  toggleSelect = () => {
    const { optionToggle } = this.state;
    this.setState({
      optionToggle: !optionToggle,
    });
  };

  render() {
    const {
      options,
      type,
      price,
      selectList,
      clickCount,
      countChange,
      addSelect,
      deleteSelect,
    } = this.props;
    const { optionToggle } = this.state;

    let totalPrice = 0;
    let totalCounts = 0;

    selectList.forEach(list => {
      totalPrice += list.price * list.countValue;
      totalCounts += list.countValue;
    });
    return (
      <div className="selectWrap">
        <div className="selectBox" onClick={this.toggleSelect}>
          {type}
        </div>
        <ul className={`selectOption ${optionToggle && "active"}`}>
          {options.map((option, index) => (
            <li
              key={index}
              className="optionList"
              onClick={e => {
                this.toggleSelect();
                addSelect(e, option, price);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
        <ul className="selectCount">
          {selectList.length !== 0 &&
            selectList.map((list, index) => (
              <SelectCount
                key={index}
                list={list}
                clickCount={clickCount}
                countChange={countChange}
                deleteSelect={deleteSelect}
              />
            ))}
        </ul>
        <div className="showTotal">
          <span>
            총 상품 금액<button className="infoBtn">?</button>
          </span>
          <span>
            총 수량 {Number(totalCounts).toLocaleString()} 개
            <em>{Number(totalPrice).toLocaleString()}원</em>
          </span>
        </div>
      </div>
    );
  }
}

export default SelectOption;

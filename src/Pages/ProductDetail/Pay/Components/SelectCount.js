import React, { Component } from "react";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SelectCount.scss";

class SelectCount extends Component {
  render() {
    const { list, deleteSelect, clickCount, countChange } = this.props;

    return (
      <li className="countItem">
        <p>{list.option}</p>
        <div className="countWrap">
          <span className="countBtnWrap">
            <button
              className="minus"
              onClick={e => {
                clickCount(e, list.option, list.countValue);
              }}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <input
              type="text"
              value={list.countValue}
              onChange={e => {
                countChange(e, list.option);
              }}
            />
            <button
              className="plus"
              onClick={e => {
                clickCount(e, list.option, list.countValue);
              }}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </span>
          <span className="countPriceWrap">
            {Number(list.price * list.countValue).toLocaleString()}원
            <em
              onClick={e => {
                deleteSelect(e, list.option);
              }}
            ></em>
          </span>
        </div>
      </li>
    );
  }
}

export default SelectCount;

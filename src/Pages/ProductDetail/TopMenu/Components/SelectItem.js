import { faMinus, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import "./SelectItem.scss";

class SelectItem extends Component {
  render() {
    const {
      list,
      finalPrice,
      countChange,
      clickCount,
      deleteSelect,
    } = this.props;

    return (
      <li className="selectItem">
        <p className="selectTitle">{list.option}</p>
        <div className="selectInfo">
          <div className="countControl">
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
          </div>
          <span className="priceInfo">
            {Number(finalPrice * list.countValue).toLocaleString()}원
            <FontAwesomeIcon
              icon={faTimes}
              onClick={e => {
                deleteSelect(e, list.option);
              }}
            />
          </span>
        </div>
      </li>
    );
  }
}

export default SelectItem;

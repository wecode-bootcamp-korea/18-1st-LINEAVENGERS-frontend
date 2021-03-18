import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./SelectResult.scss";
class SelectResult extends Component {
  render() {
    const {
      data: { option, price, id, count },
      deleteSelect,
      handleCount,
    } = this.props;
    return (
      <div className="select-result">
        <p className="result-title">{option}</p>
        <div className="result-button-wrap">
          <div className="left-btn-box">
            <button
              className="left-btn remove"
              onClick={e => handleCount(e, id)}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <span>{count}</span>
            <button className="left-btn add" onClick={e => handleCount(e, id)}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <div className="right-wrap">
            <span>{Number(price * count).toLocaleString() + "원"}</span>
            <button
              onClick={e => {
                deleteSelect(e, id);
              }}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectResult;

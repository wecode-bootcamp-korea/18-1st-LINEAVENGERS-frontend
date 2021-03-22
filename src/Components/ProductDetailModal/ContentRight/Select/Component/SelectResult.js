import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./SelectResult.scss";

class SelectResult extends Component {
  state = {
    count: 1,
  };

  countChange = e => {
    const { name, value } = e.target;

    if (Number(value) >= 10000) {
      alert("10,000 개 이하로 구매하실 수 있습니다.");
    } else if (Number(value) === 0 && value !== "") {
      alert("1개 이상 구매할 수 있습니다");
    }
    this.setState({
      [name]:
        Number(value) >= 10000
          ? 10000
          : Number(value) === 0
          ? 1
          : Number(value),
    });
  };

  countClick = (e, id) => {
    const { className } = e.target;
    const { count } = this.state;
    const btnType = className.split(" ")[1];

    if (count === 1 && btnType === "remove") {
      alert("1개 이상 구매할 수 있습니다.");
      return;
    } else if (count === 10000 && btnType === "add") {
      alert("최대 10,000개 이하로 구매하실 수 있습니다.");
      return;
    }

    this.setState(
      {
        count: btnType === "add" ? count + 1 : count - 1,
      },
      () => {
        const { count } = this.state;
        const { handleCount } = this.props;
        handleCount(e, id, count);
      }
    );
  };

  countBlur = (e, id) => {
    const { value } = e.target;
    this.setState(
      {
        count: Number(value),
      },
      () => {
        const { count } = this.state;
        const { handleCount } = this.props;
        handleCount(e, id, count);
      }
    );
  };

  render() {
    const {
      data: { option, price, id, countValue },
      deleteSelect,
    } = this.props;
    const { count } = this.state;

    return (
      <div className="selectResult">
        <p className="resultTitle">{option}</p>
        <div className="resultButtonWrap">
          <div className="leftBtnBox">
            <button
              className="leftBtn remove"
              onClick={e => {
                this.countClick(e, id);
              }}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <input
              name="count"
              type="text"
              value={count}
              onChange={this.countChange}
              onBlur={e => {
                this.countBlur(e, id);
              }}
            />
            <button
              className="leftBtn add"
              onClick={e => {
                this.countClick(e, id);
              }}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <div className="rightWrap">
            <span>{Number(price * countValue).toLocaleString() + "원"}</span>
            <button
              className="removeBtn"
              onClick={e => {
                deleteSelect(e, id);
              }}
            ></button>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectResult;

import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import "./Choice.scss";

class Choice extends Component {
  render() {
    const { addCart, productId, selectList, options } = this.props;
    return (
      <div className="selectChoice">
        <div className="choiceType" onClick={addCart}>
          <span>
            <em>N</em>
          </span>
          <em>구매하기</em>
        </div>
        <div className="choiceType">
          <FontAwesomeIcon icon={faComment} />
          톡톡문의
        </div>
        <div
          className="choiceType"
          onClick={e => {
            addCart(e, productId, selectList, options);
          }}
        >
          장바구니
        </div>
        <div className="choiceType">찜하기</div>
      </div>
    );
  }
}

export default Choice;

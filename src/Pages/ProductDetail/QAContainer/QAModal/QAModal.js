import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import "./QAModal.scss";

class QAModal extends Component {
  state = {
    comment: "",
    secretCheck: false,
    alarmCheck: false,
  };

  clickCheckBox = e => {
    const { className } = e.target;
    const BtnType = className.split(" ")[0];
    const { secretCheck, alarmCheck } = this.state;
    console.log(BtnType);
    if (BtnType === "secretBtn") {
      this.setState({
        secretCheck: !secretCheck,
      });
    } else {
      this.setState({
        alarmCheck: !alarmCheck,
      });
    }
  };

  handleComment = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { comment, alarmCheck, secretCheck } = this.state;

    return (
      <div className="QAModalContainer">
        <div className="QAModalTitle">상품 Q&A 작성하기</div>
        <div className="QAModalInner">
          <textarea
            name="comment"
            placeholder="문의하실 내용을 입력하세요"
            value={comment}
            onChange={this.handleComment}
          />
          <span className="secretCheckBox">
            <input id="secret" type="checkbox" />
            <label
              for="secret"
              className={`secretBtn ${secretCheck && "checked"}`}
              onClick={this.clickCheckBox}
            >
              <FontAwesomeIcon icon={faCheckCircle} />
              비공개
            </label>
          </span>
          <span className="alarmCheckBox">
            <input id="alarm" type="checkbox" />
            <label
              for="alarm"
              className={`alarmBtn ${alarmCheck && "checked"}`}
              onClick={this.clickCheckBox}
            >
              <FontAwesomeIcon icon={faCheckCircle} />
              톡톡/알림으로 답변받기
            </label>
          </span>
        </div>
        <p className="moreInfo">
          <FontAwesomeIcon icon={faInfoCircle} />
          문의하신 내용에 대한 답변은 해당 상품의 상세페이지 또는
          <em>'쇼핑MY &gt; 상품Q&A'</em>에서 확인하실 수 있습니다.
        </p>
        <div className="btnWrap">
          <button className="cancel">취소</button>
          <button className="submit">등록</button>
        </div>
      </div>
    );
  }
}

export default QAModal;

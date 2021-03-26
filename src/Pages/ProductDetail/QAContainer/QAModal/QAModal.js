import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { URL } from "../../../../config";
import "./QAModal.scss";

class QAModal extends Component {
  state = {
    id: 0,
    qId: 0,
    comment: "",
    secretCheck: false,
    alarmCheck: false,
  };

  clickCheckBox = e => {
    const { className } = e.target;
    const BtnType = className.split(" ")[0];
    const { secretCheck, alarmCheck } = this.state;
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

  addQa = () => {
    const { comment } = this.state;
    const query = this.props.location.search.split("?")[1];
    fetch(`${URL}/product/${query}/qna`, {
      method: "POST",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.TGXxK_c43ROKMfF_QPUWar7uWlzhYZaCCVyudlpHMKg",
      },
      body: JSON.stringify({
        content: comment,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === "SUCCESS") {
          alert("Q&A가 등록됐습니다.");
          window.close();
        }
      });
  };

  patchQA = () => {
    const { comment, id, qId } = this.state;
    fetch(`${URL}/product/${id}/qna/${qId}`, {
      method: "PATCH",
      headers: {
        Authorization: localStorage.getItem("access_token"),
      },
      body: JSON.stringify({
        content: comment,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === "SUCCESS") {
          alert("수정됐습니다.");
          window.close();
        }
      });
  };

  componentDidMount() {
    const query = this.props.location.search.split("&");
    if (query.length === 3) {
      const id = query[0].split("=")[1];
      const qId = query[1].split("=")[1];
      const comment = query[2].split("=")[1];
      this.setState({
        id,
        qId,
        comment: decodeURIComponent(comment),
      });
    } else {
      this.setState({
        comment: "",
        qId: null,
      });
    }
  }
  render() {
    const { comment, alarmCheck, secretCheck, qId } = this.state;
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
          <button
            className="cancel"
            onClick={() => {
              window.close();
            }}
          >
            취소
          </button>
          {qId === null ? (
            <button className="submit" onClick={this.addQa}>
              등록
            </button>
          ) : (
            <button className="submit" onClick={this.patchQA}>
              수정
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(QAModal);

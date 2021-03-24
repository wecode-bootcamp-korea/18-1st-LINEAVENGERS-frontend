import React from "react";
import "./Modal.scss";
import { FaStar } from "react-icons/fa";

class Popup extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: [false, false, false, false, false],
      myCount: "",
      comment: "",
    };
  }

  handleStarClick = index => {
    let clickStates = [...this.state.clicked];
    for (let i = 0; i < 5; i++) {
      if (i <= index) clickStates[i] = true;
      else clickStates[i] = false;
    }
    this.setState({ clicked: clickStates });
  };

  handleClickCountStar = () => {
    const sw = this.state.clicked;

    if (sw[4]) {
      return "5점 (최고예요)";
    } else if (sw[3]) {
      return "4점 (좋아요)";
    } else if (sw[2]) {
      return "3점 (괜찮아요)";
    } else if (sw[1]) {
      return "2점 (그저 그래요)";
    } else if (sw[0]) {
      return "1점 (별로예요)";
    } else {
      return "리뷰 부탁드립니다!";
    }
  };

  commentValue = e => {
    this.setState({ comment: e.target.value });
  };

  commentReview = () => {
    let mycount = this.state.clicked.filter(Boolean).length;
    if (mycount >= 1) {
      this.setState({ myCount: mycount });
    }
  };

  registerReview = () => {
    fetch("http://10.58.1.71:8000/mypage/review", {
      method: "post",
      body: JSON.stringify({
        product: window.myId,
        rating: this.state.myCount,
        content: this.state.comment,
      }),
    });
  };

  render() {
    console.log(this.state.product);
    return (
      <div className="modal">
        <div className="modalReview">리뷰 쓰기</div>

        <div className="modalHead">
          <img className="modalImage" src={window.myImgUrl} alt="라인프렌즈" />
          <div className="modalName">{window.myName}</div>
        </div>
        <div className="modalContent">
          <div className="modalSatisfy">상품은 만족하셨나요?</div>
          <div className="modalStar">
            <div onClick={this.commentReview}>
              <FaStar
                size="50"
                onClick={() => this.handleStarClick(0)}
                className={this.state.clicked[0] ? "red" : null}
              />
              <FaStar
                size="50"
                onClick={() => this.handleStarClick(1)}
                className={this.state.clicked[1] ? "red" : null}
              />
              <FaStar
                size="50"
                onClick={() => this.handleStarClick(2)}
                className={this.state.clicked[2] ? "red" : null}
              />
              <FaStar
                size="50"
                onClick={() => this.handleStarClick(3)}
                className={this.state.clicked[3] ? "red" : null}
              />
              <FaStar
                size="50"
                onClick={() => this.handleStarClick(4)}
                className={this.state.clicked[4] ? "red" : null}
              />
            </div>
            <div className="modalStarContent">
              <div className="modalStarGood">{this.handleClickCountStar()}</div>
            </div>
          </div>
        </div>
        <div className="modalText">
          <input
            className="modalTextContent"
            type="textarea"
            placeholder="최소 10자 이상 입력해주세요"
            onChange={this.commentValue}
          ></input>
        </div>
        <div className="modalBtn">
          <div className="modalBtnLeft">
            <button className="modalBtnLeftCancle" onClick={window.close}>
              취소
            </button>
          </div>
          <div className="modalBtnRight">
            <button
              className="modalBtnLeftRegister"
              onClick={this.registerReview}
            >
              등록
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;

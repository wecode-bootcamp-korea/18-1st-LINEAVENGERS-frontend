import React from "react";
import "./Modal.scss";
import { FaStar } from "react-icons/fa";

class Popup extends React.Component {
  constructor() {
    super();
    this.state = {
      Product: {},
      Clicked: [false, false, false, false, false],
      SetClicked: [false, false, false, false, false],
    };
  }

  componentDidMount() {
    fetch("/Data/MyPageProduct1.json")
      .then(res => res.json())
      .then(res => this.setState({ Product: res }));
  }

  handleStarClick = (e, index) => {
    let clickStates = [...this.state.Clicked];
    for (let i = 0; i < 5; i++) {
      if (i <= index) clickStates[i] = true;
      else clickStates[i] = false;
    }
    this.setState({ Clicked: clickStates });
  };

  render() {
    return (
      <div className="modal">
        <div className="modalReview">리뷰 쓰기</div>
        <div className="modalHead">
          <img
            className="modalImage"
            src={this.state.Product.img}
            alt="라인프렌즈"
          />
          <div className="modalName">{this.state.Product.name}</div>
        </div>
        <div className="modalContent">
          <div className="modalSatisfy">상품은 만족하셨나요?</div>
          <div className="modalStar">
            <div>
              <FaStar
                size="50"
                onClick={e => this.handleStarClick(e, 0)}
                className={this.state.Clicked[0] ? "red" : null}
              />
              <FaStar
                size="50"
                onClick={e => this.handleStarClick(e, 1)}
                className={this.state.Clicked[1] ? "red" : null}
              />
              <FaStar
                size="50"
                onClick={e => this.handleStarClick(e, 2)}
                className={this.state.Clicked[2] ? "red" : null}
              />
              <FaStar
                size="50"
                onClick={e => this.handleStarClick(e, 3)}
                className={this.state.Clicked[3] ? "red" : null}
              />
              <FaStar
                size="50"
                onClick={e => this.handleStarClick(e, 4)}
                className={this.state.Clicked[4] ? "red" : null}
              />
            </div>
          </div>
        </div>
        <div className="modalText">
          <input
            className="modalTextContent"
            type="textarea"
            placeholder="최소 10자 이상 입력해주세요"
          ></input>
        </div>
        <div className="modalBtn">
          <div className="modalBtnLeft">
            <button className="modalBtnLeftCancle" onClick={window.close}>
              취소
            </button>
          </div>
          <div className="modalBtnRight">
            <button className="modalBtnLeftRegister">등록</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;

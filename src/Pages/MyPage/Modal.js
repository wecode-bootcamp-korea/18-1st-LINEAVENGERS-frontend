import React from "react";
import "./Modal.scss";
import { FaStar } from "react-icons/fa";

class Popup extends React.Component {
  constructor() {
    super();
    this.state = {
      Product: [],
      Clicked: [false, false, false, false, false],
    };
  }

  componentDidMount() {
    fetch("/Data/MyPageProduct.json")
      .then(res => res.json())
      .then(res => this.setState({ Product: res }));
  }

  handleStarClick = index => {
    let clickStates = [...this.state.Clicked];
    for (let i = 0; i < 5; i++) {
      if (i <= index) clickStates[i] = true;
      else clickStates[i] = false;
    }
    this.setState({ Clicked: clickStates });
  };

  handleClickView = () => {
    const sw = this.state.Clicked;

    if (sw[4] === true) {
      return "5점 (최고예요)";
    } else if (sw[3] === true) {
      return "4점 (좋아요)";
    } else if (sw[2] === true) {
      return "3점 (괜찮아요)";
    } else if (sw[1] === true) {
      return "2점 (그저 그래요)";
    } else if (sw[0] === true) {
      return "1점 (별로예요)";
    } else {
      return "리뷰 부탁드립니다!";
    }
  };

  render() {
    return (
      <div className="modal">
        <div className="modalReview">리뷰 쓰기</div>
        {this.state.Product.map(product => {
          return (
            <div className="modalHead">
              <img className="modalImage" src={product.img} alt="라인프렌즈" />
              <div className="modalName">{product.name}</div>
            </div>
          );
        })}
        <div className="modalContent">
          <div className="modalSatisfy">상품은 만족하셨나요?</div>
          <div className="modalStar">
            <div>
              <FaStar
                size="50"
                onClick={e => this.handleStarClick(0)}
                className={this.state.Clicked[0] ? "red" : null}
              />
              <FaStar
                size="50"
                onClick={e => this.handleStarClick(1)}
                className={this.state.Clicked[1] ? "red" : null}
              />
              <FaStar
                size="50"
                onClick={e => this.handleStarClick(2)}
                className={this.state.Clicked[2] ? "red" : null}
              />
              <FaStar
                size="50"
                onClick={e => this.handleStarClick(3)}
                className={this.state.Clicked[3] ? "red" : null}
              />
              <FaStar
                size="50"
                onClick={e => this.handleStarClick(4)}
                className={this.state.Clicked[4] ? "red" : null}
              />
            </div>
            <div className="modalStarContent">
              <div className="modalStarGood">{this.handleClickView()}</div>
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

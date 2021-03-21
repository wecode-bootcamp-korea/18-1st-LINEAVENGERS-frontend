import React from "react";
import "./Modal.scss";

class Popup extends React.Component {
  constructor() {
    super();
    this.state = {
      Product: {},
    };
  }

  componentDidMount() {
    fetch("/Data/MyPageProduct1.json")
      .then(res => res.json())
      .then(res => this.setState({ Product: res }));
  }

  render() {
    console.log(this.state.Product);
    return (
      <div className="Modal">
        <div className="ModalReview">리뷰 쓰기</div>
        <div className="ModalHead">
          <img
            className="ModalImage"
            src={this.state.Product.img}
            alt="라인프렌즈"
          />
          <div className="ModalName">{this.state.Product.name}</div>
        </div>
        <div className="ModalContent">
          <div className="ModalSatisfy">상품은 만족하셨나요?</div>
          <div className="ModalStar">별 다섯개</div>
        </div>
        <div className="ModalText">
          <input
            className="ModalTextContent"
            type="textarea"
            placeholder="최소 10자 이상 입력해주세요"
          ></input>
        </div>
        <div className="ModalBtn">
          <div className="ModalBtnLeft">
            <button>취소</button>
          </div>
          <div className="ModalBtnLeft">
            <button>등록</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;

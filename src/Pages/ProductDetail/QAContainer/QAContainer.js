import React, { Component } from "react";
import "./QAContainer.scss";

class QAContainer extends Component {
  render() {
    return (
      <section className="QAContainer" ref={this.props.QAContainer}>
        <h1>Q&A</h1>
        <p>구매하시려는 상품에 대해 궁금한 점이 있으신 경우 문의해주세요.</p>
        <div className="QABtnWrap">
          <button>상품 Q&A 작성하기</button>
        </div>
        <div className="QAListContainer">
          <ul className="QATitle">
            <li>답변상태</li>
            <li>제목</li>
            <li>작성자</li>
            <li>작성일</li>
          </ul>
          <ul className="QAList">
            <li>답변완료</li>
            <li>비밀글입니다.</li>
            <li>test</li>
            <li>2021.02.11</li>
          </ul>
        </div>
        <div className="QAPage">
          <ul className="PageBox">
            <li>1</li>
          </ul>
        </div>
      </section>
    );
  }
}

export default QAContainer;

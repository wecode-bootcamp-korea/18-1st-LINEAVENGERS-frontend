import React, { Component } from "react";
import QAAnswer from "./QAAnswer";
import { URL } from "../../../config";
import "./QAContainer.scss";

class QAContainer extends Component {
  state = {
    qaData: [],
    qaOpenIndex: null,
  };

  handleQA = (e, index) => {
    this.setState({
      qaOpenIndex: index,
    });
  };

  openQAModal = () => {
    const option = "width = 650, height= 500";
    window.open(`/QAModal?${this.props.productId}`, "QA", option);
  };

  deleteQA = (e, id) => {
    const { qaData } = this.state;
    // eslint-disable-next-line no-restricted-globals
    const check = confirm("삭제하시겠습니까");
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.TGXxK_c43ROKMfF_QPUWar7uWlzhYZaCCVyudlpHMKg";
    if (check) {
      fetch(`${URL}/product/${this.props.productId}/qna/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      })
        .then(res => {
          console.log(res);
          return res.json();
        })
        .then(res => console.log(res));
      this.setState({
        qaData: qaData.filter(data => data.q_id !== id),
      });
    }
  };
  componentDidMount() {
    fetch(`${URL}/product/${this.props.productId}/qna`)
      .then(res => {
        return res.json();
      })
      .then(res =>
        this.setState({
          qaData: res.qna_list,
        })
      );
  }
  render() {
    const { qaData, qaOpenIndex } = this.state;

    return (
      <section className="QAContainer" ref={this.props.QAContainer}>
        <h1>Q&A</h1>
        <p>구매하시려는 상품에 대해 궁금한 점이 있으신 경우 문의해주세요.</p>
        <div className="QABtnWrap">
          <button onClick={this.openQAModal}>상품 Q&A 작성하기</button>
        </div>
        <div className="QAListContainer">
          <ul className="QATitle">
            <li>답변상태</li>
            <li>제목</li>
            <li>작성자</li>
            <li>작성일</li>
          </ul>
          {qaData.length !== 0 &&
            qaData.map((qa, index) => {
              return (
                <>
                  <ul
                    className={`QAList ${qaOpenIndex === index && "active"}`}
                    onClick={e => {
                      this.handleQA(e, index);
                    }}
                  >
                    <li>답변완료</li>
                    <li>{qa.q_content}</li>
                    <li>{qa.q_login_id}</li>
                    <li>{qa.q_create_at.split(" ")[0]}</li>
                  </ul>
                  <QAAnswer
                    qId={qa.q_id}
                    question={qa.q_content}
                    answer={qa.a_content}
                    deleteQA={this.deleteQA}
                  />
                </>
              );
            })}
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

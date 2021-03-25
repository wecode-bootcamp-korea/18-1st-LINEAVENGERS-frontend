import React, { Component } from "react";

class QAAnswer extends Component {
  render() {
    const { qId, answer, question, deleteQA, editQAModal } = this.props;

    return (
      <ul className="QAAnswer">
        <li>{question}</li>
        <li>{answer}</li>
        <button
          className="editBtn"
          onClick={e => {
            editQAModal(e, question, qId);
          }}
        >
          수정
        </button>
        <button
          className="removeBtn"
          onClick={e => {
            deleteQA(e, qId);
          }}
        >
          삭제
        </button>
      </ul>
    );
  }
}

export default QAAnswer;

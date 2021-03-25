import Reat, { Component } from "react";

class QAAnswer extends Component {
  render() {
    const { answer, question, deleteQA, qId } = this.props;
    return (
      <ul className="QAAnswer">
        <li>{question}</li>
        <li>{answer}</li>
        <button className="editBtn">수정</button>
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

import React from "react";
import "./MyPage.scss";
import { RiErrorWarningLine } from "react-icons/ri";

class MyPageNone extends React.Component {
  render() {
    return (
      <article className="myPageArticle">
        <div class="myPageArticleWarning">
          <RiErrorWarningLine size="100" opacity="0.1" />
        </div>
        <div class="myPageArticleNo">내역이 없습니다.</div>
        <div class="myPageArticleContent">
          라인 어벤져스에서 결제한 모든 내역을 한번에 확인하실 수 있습니다.
        </div>
      </article>
    );
  }
}

export default MyPageNone;

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import "./ReviewContainer.scss";
import ReviewList from "./ReviewList/ReviewList";

class ReviewContainer extends Component {
  state = {
    tabIndex: 0,
    reviewOffset: 0,
  };

  tabChange = (e, id) => {
    this.setState({
      tabIndex: id,
    });
  };

  pageChange = (e, index) => {
    this.setState({
      reviewOffset: index,
    });
  };

  render() {
    const {
      ReviewData: { reviews },
    } = this.props;
    const { reviewOffset } = this.state;
    const { tabIndex } = this.state;
    const pages = Math.ceil(reviews.length / 10);
    const reviewPages = new Array(pages).fill(0);

    if (tabIndex === 0) reviews.sort((a, b) => b.thumbs - a.thumbs);
    else if (tabIndex === 1)
      reviews.sort((a, b) => new Date(b.date) - new Date(a.date));
    else if (tabIndex === 2) reviews.sort((a, b) => b.grade - a.grade);
    else reviews.sort((a, b) => a.grade - b.grade);

    const showReviewList = reviews.slice(
      reviewOffset * 10,
      reviewOffset * 10 + 10
    );
    return (
      <section className="reviewContainer" ref={this.props.ReviewContainer}>
        <h1>상품리뷰</h1>
        <p className="detailInfo">
          상품을 구매하신 분들이 작성하신 리뷰입니다. 리뷰 작성시 아래 금액만큼
          포인트가 적립됩니다.
        </p>
        <p className="detailInfo">
          <span className="infoText">
            텍스트 리뷰 : <em>50원</em>
          </span>
          <span>
            포토/동영상 리뷰 : <em>50원</em>
          </span>
          <span>
            한달사용 텍스트 리뷰 : <em>50원</em>
          </span>
          <span>
            한달사용 포토/동영상 리뷰 : <em>50원</em>
          </span>
        </p>
        <div className="reviewListWrap">
          <div className="reviewListTitle">
            <span>리뷰 {reviews.length}건</span>
            <ul>
              {sortTab.map((tab, index) => (
                <li
                  key={tab.id}
                  onClick={e => {
                    this.tabChange(e, tab.id);
                  }}
                  className={tabIndex === index && "checked"}
                >
                  {<FontAwesomeIcon icon={faCheck} />}
                  {tab.title}
                </li>
              ))}
            </ul>
          </div>
          <ul className="reviewList">
            {showReviewList.map((review, index) => (
              <ReviewList key={index} review={review} />
            ))}
          </ul>
        </div>
        <div className="reviewPage">
          <ul className="pageBox">
            {reviewPages.map((e, index) => (
              <li
                key={index}
                className={`pageList ${reviewOffset === index && "checked"}`}
                onClick={e => {
                  this.pageChange(e, index);
                }}
              >
                {index + 1}
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

const sortTab = [
  { id: 0, title: "랭킹순" },
  { id: 1, title: "최신순" },
  { id: 2, title: "평점 높은순" },
  { id: 3, title: "평점 낮은순" },
];

export default ReviewContainer;

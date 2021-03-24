import React, { Component } from "react";
import {
  faChevronLeft,
  faChevronRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Review.scss";

class Review extends Component {
  state = {
    reviewOffset: 0,
  };

  reviewPageControl = e => {
    const btnType = e.target.className;
    const { reviewOffset } = this.state;
    const {
      ReviewData: { reviews },
    } = this.props;

    if (btnType === "prev" && reviewOffset === 0) return;
    else if (
      btnType === "next" &&
      reviewOffset === Math.ceil(reviews.length / 4) - 1
    )
      return;
    this.setState({
      reviewOffset: btnType === "prev" ? reviewOffset - 1 : reviewOffset + 1,
    });
  };

  render() {
    const {
      ReviewData: { reviews },
    } = this.props;
    const { reviewOffset } = this.state;
    const presentReview = reviews.slice(4 * reviewOffset, 4 * reviewOffset + 4);
    const starGrade = new Array(5).fill(0);
    return (
      <div className="reviewWrap">
        <p className="reviewTitle">
          포토/동영상<span>({reviews.length})</span>
        </p>
        <ul className="reviewListContainer">
          {presentReview.map((review, index) => (
            <li className="reviewListItem">
              <div className="reviewInfo">
                <span className="reviewGrade">
                  {starGrade.map((star, index) => {
                    if (review.grade > index)
                      return (
                        <FontAwesomeIcon className="checked" icon={faStar} />
                      );
                    else return <FontAwesomeIcon icon={faStar} />;
                  })}
                  <em>{review.grade}</em>
                </span>
                <span className="reviewDetail">
                  <em>{review.user}</em>
                  <em>{review.date}</em>
                  <em>{`${review.type}: ${review.option}`}</em>
                </span>
                <p>{review.comment}</p>
              </div>
              <div className="reviewImg">
                <img src={review.imgUrl} alt="상품 이미지" />
              </div>
            </li>
          ))}
        </ul>
        <div className="reviewControl">
          <span>더보기</span>
          <button className="prev" onClick={this.reviewPageControl}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="next" onClick={this.reviewPageControl}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    );
  }
}

export default Review;

import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import "./ReviewList.scss";

class ReviewList extends Component {
  render() {
    const {
      review: { comment, date, grade, image_url, option, type, user },
    } = this.props;
    const starFill = new Array(5).fill(0);
    return (
      <li className="reviewBottomListItem">
        <div className="listBox">
          <img
            src="https://profile-phinf.pstatic.net/404/default.png?type=f80_80"
            alt="리뷰이미지"
          />
        </div>
        <div className="listBox">
          <span className="gradeValue">
            {starFill.map((star, index) => (
              <FontAwesomeIcon
                icon={faStar}
                className={`${grade > index && "checked"}`}
              />
            ))}
            <em>{grade}</em>
          </span>
          <span className="userInfo">
            {user}
            <em></em>
            {date.split(" ")[0]}
          </span>
          <span className="optionInfo">{type + ": " + option.name}</span>
          <p>{comment}</p>
        </div>
        <div className="listBox">
          <img src={image_url} alt="리뷰이미지" />
        </div>
        <div className="listBox">
          <span>
            <FontAwesomeIcon icon={faThumbsUp} />
            <em>{5}</em>
          </span>
        </div>
      </li>
    );
  }
}

export default ReviewList;

import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./DetailList.scss";

class DetailList extends Component {
  render() {
    const {
      grade,
      comment,
      date,
      imgUrl,
      option,
      type,
      user,
    } = this.props.data;
    const stars = new Array(5).fill(0);
    return (
      <li className="detail-list">
        <div className="list-left">
          <p className="detail-stars">
            {stars.map((star, index) => (
              <FontAwesomeIcon
                icon={faStar}
                className={`start-icon ${index > grade - 1 ? "" : "checked"}`}
              />
            ))}
            <span>{grade}</span>
          </p>
          <p className="detail-info">
            <strong>{user}</strong>
            <strong>{date}</strong>
            <span>
              {type}: {option}
            </span>
          </p>
          <p className="detail-memo">{comment}</p>
        </div>
        <div className="list-right">
          <img src={imgUrl} alt="상품 이미지" />
        </div>
      </li>
    );
  }
}

export default DetailList;

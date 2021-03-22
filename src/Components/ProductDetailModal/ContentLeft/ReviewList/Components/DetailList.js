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
      <li className="detailList">
        <div className="listLeft">
          <p className="detailStars">
            {stars.map((star, index) => (
              <FontAwesomeIcon
                icon={faStar}
                className={`startIcon ${index > grade - 1 ? "" : "checked"}`}
              />
            ))}
            <span>{grade}</span>
          </p>
          <p className="detailInfo">
            <strong>{user}</strong>
            <strong>{date}</strong>
            <span>
              {type}: {option}
            </span>
          </p>
          <p className="detailMemo">{comment}</p>
        </div>
        <div className="listRight">
          <img src={imgUrl} alt="상품 이미지" />
        </div>
      </li>
    );
  }
}

export default DetailList;

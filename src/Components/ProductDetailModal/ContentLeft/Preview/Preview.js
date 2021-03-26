import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import "./Preview.scss";

class Preview extends Component {
  render() {
    const { reviews, imageUrls, slideIndex, handlePreview } = this.props;
    let avgGrade = 0;

    if (reviews.length > 0) {
      reviews.forEach(review => {
        avgGrade += review.grade;
      });
    }
    return (
      <div className="preview">
        <ul className="slidePreview">
          {imageUrls.map((url, index) => {
            return (
              <li
                key={uuid()}
                className={`previewList ${index === slideIndex && "active"}`}
                onMouseOver={e => {
                  handlePreview(e, index);
                }}
              >
                <img src={url} alt="상품 미리보기" />
              </li>
            );
          })}
        </ul>
        <div className="review">
          <span>
            리뷰수<strong>{reviews.length}</strong>
          </span>
          <span className="reviewGrade">
            사용자 총 평점<strong>{avgGrade.toFixed(1)}</strong>
            <strong>5</strong>
          </span>
        </div>
      </div>
    );
  }
}

export default Preview;

import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Preview.scss";

class Preview extends Component {
  state = {
    imageIndex: 0,
  };

  changeImage = e => {
    const { className } = e.target;
    const { imageIndex } = this.state;
    const {
      PreviewData: { imageUrls },
    } = this.props;
    const btnType = className.split(" ")[1];

    this.setState({
      imageIndex:
        btnType === "prev"
          ? imageIndex === 0
            ? imageUrls.length - 1
            : imageIndex - 1
          : imageIndex === imageUrls.length - 1
          ? 0
          : imageIndex + 1,
    });
  };

  mouseOverImage = (e, listIndex) => {
    this.setState({
      imageIndex: listIndex,
    });
  };

  render() {
    const {
      PreviewData: { imageUrls, reviews },
    } = this.props;
    const { imageIndex } = this.state;

    let totalGrade = 0;
    reviews.forEach(review => (totalGrade += review.grade));

    return (
      <div className="preview">
        <div className="previewImgBox">
          <img src={imageUrls[imageIndex]} alt="상품 미리보기"></img>
          <button
            className="slideBtn prev"
            onClick={e => {
              this.changeImage(e);
            }}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            className="slideBtn next"
            onClick={e => {
              this.changeImage(e);
            }}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <ul className="previewImgList">
          {imageUrls.map((imgUrl, index) => {
            return (
              <li
                key={index}
                className={`${imageIndex === index && "active"}`}
                onMouseOver={e => {
                  this.mouseOverImage(e, index);
                }}
              >
                <img src={imgUrl} alt="상품 미리보기" />
              </li>
            );
          })}
        </ul>
        <div className="reviewData">
          <span>
            리뷰수<em>{reviews.length}</em>
          </span>
          <span>
            사용자 총 평점
            <em>{Number(totalGrade / reviews.length).toFixed(1)}</em>/<em>5</em>
          </span>
        </div>
      </div>
    );
  }
}

export default Preview;

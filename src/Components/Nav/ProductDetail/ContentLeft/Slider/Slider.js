import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { v4 as uuid } from "uuid";
import "./Slider.scss";

class Slider extends Component {
  render() {
    const { imgUrls, slideIndex, handleSlide } = this.props;
    return (
      <div className="slider">
        <ul className="slideBox">
          {imgUrls.map((url, index) => (
            <li
              key={uuid()}
              className={`slideList ${index === slideIndex && "active"}`}
            >
              <img src={url} alt="상품 이미지" />
            </li>
          ))}
        </ul>
        <button className="slideBtn prev" onClick={handleSlide}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="slideBtn next" onClick={handleSlide}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    );
  }
}

export default Slider;

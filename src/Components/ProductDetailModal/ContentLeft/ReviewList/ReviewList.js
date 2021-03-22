import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./ReviewList.scss";
import DetailList from "./Components/DetailList";

class ReviewList extends Component {
  constructor(props) {
    super(props);
    this.Slide = React.createRef();
  }

  state = {
    leftValue: 0,
  };
  handleSlide = e => {
    const { className } = e.target;
    const { leftValue } = this.state;
    const { reviews } = this.props;

    const btnType = className.split(" ")[1];
    const slideBox = this.Slide.current;
    const moveSize = slideBox.clientWidth + 60;
    const minLeftValue = moveSize * Math.floor((reviews.length - 1) / 2) * -1;

    this.setState({
      leftValue:
        btnType === "prev"
          ? leftValue >= 0
            ? 0
            : leftValue + moveSize
          : leftValue <= minLeftValue
          ? minLeftValue
          : leftValue - moveSize,
    });
  };
  render() {
    const { reviews } = this.props;
    const { leftValue } = this.state;
    return (
      <div className="reviewList">
        <div className="reviewTitle">
          <span>
            포토/동영상<strong>({reviews.length})</strong>
          </span>
        </div>
        <div className="reviewWrap">
          <ul
            className="detailBox"
            style={{ left: leftValue }}
            ref={this.Slide}
          >
            {reviews.map(review => (
              <DetailList data={review} />
            ))}
          </ul>
        </div>
        <button className="slideBtn prev" onClick={this.handleSlide}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="slideBtn next" onClick={this.handleSlide}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    );
  }
}
export default ReviewList;

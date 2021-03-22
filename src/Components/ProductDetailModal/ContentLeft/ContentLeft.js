import React, { Component } from "react";
import "./ContentLeft.scss";
import Slider from "./Slider/Slider";
import Preview from "./Preview/Preview";
import ReviewList from "./ReviewList/ReviewList";

class ContentLeft extends Component {
  state = {
    slideIndex: 0,
  };

  handleSlide = e => {
    const { className } = e.target;
    const {
      leftData: { imageUrls },
    } = this.props;

    const { slideIndex } = this.state;
    const btnType = className.split(" ")[1];
    this.setState({
      slideIndex:
        btnType === "prev"
          ? slideIndex === 0
            ? imageUrls.length - 1
            : slideIndex - 1
          : slideIndex === imageUrls.length - 1
          ? 0
          : slideIndex + 1,
    });
  };

  handlePreview = (e, index) => {
    this.setState({
      slideIndex: index,
    });
  };

  render() {
    const { slideIndex } = this.state;
    const { imageUrls, reviews } = this.props.leftData;

    return (
      <div className="contentLeft">
        <Slider
          imageUrls={imageUrls}
          slideIndex={slideIndex}
          handleSlide={this.handleSlide}
        />
        <Preview
          reviews={reviews}
          imageUrls={imageUrls}
          slideIndex={slideIndex}
          handlePreview={this.handlePreview}
        />
        <ReviewList reviews={reviews} />
      </div>
    );
  }
}

export default ContentLeft;

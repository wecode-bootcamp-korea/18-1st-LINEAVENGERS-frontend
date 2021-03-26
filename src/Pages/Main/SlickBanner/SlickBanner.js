import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlickBanner.scss";

export class SlickBanner extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrow: true,
      autoplay: true,
      autoplaySpeed: 3000,
    };

    const StyledSlider = styled(Slider)`
      .slick-dots {
        bottom: 40px;
      }

      /*화살표 크기*/
      .slick-prev:before,
      .slick-next:before {
        font-size: 50px;
      }

      .slick-prev {
        left: 10%; /*위치*/
        z-index: 999;
      }

      .slick-next {
        right: 10%; /*위치*/
      }
    `;

    const { itsBanner } = this.props;

    return (
      <div className="slickBanner">
        <StyledSlider {...settings}>
          {itsBanner.map(el => {
            return (
              <div className="slickBannerImgAndCopy">
                <div
                  className="slickBannerBanckgroundImg"
                  style={{ backgroundImage: `url(` + el.imgUrl + `)` }}
                ></div>
                <div className="copyContainer">
                  <p className={el.id === 4 ? "bigCopyWhite" : "bigCopy"}>
                    {el.bigCopy}
                  </p>
                  <p className={el.id === 4 ? "bigCopyWhite" : "bigCopy"}>
                    {el.bigCopy2}
                  </p>
                  <p className={el.id === 4 ? "smallCopyWhite" : "smallCopy"}>
                    {el.smallCopy}
                  </p>
                </div>
              </div>
            );
          })}
        </StyledSlider>
      </div>
    );
  }
}

export default SlickBanner;

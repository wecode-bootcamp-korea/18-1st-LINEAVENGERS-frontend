import React, { Component } from "react";
import styled from "styled-components"; // for 커스텀
import Slider from "react-slick"; // 세팅된 컴포넌트
import "slick-carousel/slick/slick.css"; //Slick의 CSS
import "slick-carousel/slick/slick-theme.css"; //Slick의 CSS
import "./SlickBanner.scss";

export class SlickBanner extends Component {
  render() {
    const settings = {
      dots: true, // 하단 도트 버튼 보이기
      infinite: true, // 무한 반복
      speed: 1000, // 넘어갈 때 속도
      slidesToShow: 1, // 한 번에 보여질 슬라이드 수
      slidesToScroll: 1, //도트 또는 화살표 한 번 클릭시 넘어가는 슬라이드 수
      arrow: true, // 양쪽 화살표 보이기
      autoplay: true, // 슬라이드 자동 변경
      autoplaySpeed: 3000, // 넘어가는 시간 간격
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

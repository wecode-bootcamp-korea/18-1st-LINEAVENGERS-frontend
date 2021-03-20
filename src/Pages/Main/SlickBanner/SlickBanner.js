import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // slide의 css는 이걸 쓰면 돼
import "slick-carousel/slick/slick-theme.css"; // 이것도 쓰렴
import "./SlickBanner.scss";

export class SlickBanner extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrow: true,
    };

    // const { slideList } = this.props;
    console.log("itsBanner >>>", this.props.itsBanner);

    return (
      <div className="slickBanner">
        <Slider {...settings}>
          {this.props.itsBanner.map(el => {
            return (
              <div className="slickBannerImg">
                <div
                  className="slickBannerBanckgroundImg"
                  style={{ backgroundImage: `url(` + el.imgUrl + `)` }}
                ></div>
                {/* <img alt="" src={el.imgUrl} /> */}
              </div>
            );
          })}

          {/* <div>
            <img
              alt=""
              src="https://shop-phinf.pstatic.net/20210317_13/1615942271595pOsTT_JPEG/main_pc_bn_golf_acc2.jpg"
            />
          </div>
          <div>
            <img
              alt=""
              src="https://shop-phinf.pstatic.net/20210317_231/1615977673371QXVB2_JPEG/PROMOTION_PC_28129.jpg"
            />
          </div>
          <div>
            <img
              alt=""
              src="https://shop-phinf.pstatic.net/20210317_182/1615977460065NVmGR_JPEG/PROMOTION_PC.jpg"
            />
          </div>
          <div>
            <div
              style={{
                backgroundImage: `url("https://shop-phinf.pstatic.net/20210201_24/1612164845849t0Vnf_JPEG/main_bn_pc_G.jpg")`
              }}
            ></div>
          </div> */}
        </Slider>
      </div>
    );
  }
}

export default SlickBanner;

import React, { Component } from "react";
import "./MaxPoint.scss";

class MaxPoint extends Component {
  state = {
    detailPop: false,
  };

  clickPop = () => {
    const { detailPop } = this.state;
    this.setState({
      detailPop: !detailPop,
    });
  };

  render() {
    const { price } = this.props;
    const { detailPop } = this.state;
    const maxPrice = Math.floor((price * 17) / 1000 / 10) * 10;
    const normalPrice = Math.floor((price * 10) / 1000 / 10) * 10;
    const subPrice = maxPrice - normalPrice;

    return (
      <div className="maxPoint">
        <span className="maxTitle">최대 적립 포인트</span>
        <div className="maxPrice">
          <span className="maxValue">
            {maxPrice.toLocaleString()}
            <em>원</em>
          </span>
          <button onClick={this.clickPop}>?</button>
          <div className={`maxDetail ${detailPop && "active"}`}>
            <div className="maxDetailList">
              <p className="maxDetailTitle">구매적립</p>
              <p className="maxDetailInfo">
                <span>기본적립</span>
                <span>{normalPrice.toLocaleString()}원</span>
              </p>
            </div>
            <div className="maxDetailList">
              <p className="maxDetailTitle">리뷰적립</p>
              <p className="maxDetailInfo">
                <span>텍스트 리뷰 작성시</span>
                <span>
                  {Number(Math.floor(subPrice / 3 / 10) * 10).toLocaleString()}
                  원
                </span>
              </p>
              <p className="maxDetailInfo">
                <span>포토/동영상 리뷰 작성시</span>
                <span style={{ marginRight: "3px" }}>
                  {Number(
                    subPrice - Math.floor(subPrice / 3 / 10) * 10
                  ).toLocaleString()}
                  원
                </span>
              </p>
            </div>
            <span className="closeBtn" onClick={this.clickPop}></span>
          </div>
        </div>
      </div>
    );
  }
}

export default MaxPoint;

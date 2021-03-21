import React, { Component } from "react";
import "./Price.scss";

class Price extends Component {
  state = {
    detailPop: false,
  };

  clickDetail = () => {
    const { detailPop } = this.state;
    this.setState({
      detailPop: !detailPop,
    });
  };

  render() {
    const { selectList } = this.props;
    const { detailPop } = this.state;
    let totalCount = 0;
    let totalPrice = 0;

    for (let i = 0; i < selectList.length; i++) {
      totalCount += selectList[i].countValue;
      totalPrice += selectList[i].price * selectList[i].countValue;
    }

    return (
      <div className="showPrice">
        <div className="priceTitle">
          <span>
            총 상품 금액
            <button onClick={this.clickDetail}>?</button>
            <div className={`priceDetail ${detailPop && "active"}`}>
              <p>
                총 상품금액에 <span>배송비는 포함되어 있지 않습니다.</span>
                <br />
                결제시 배송비가 추가될 수 있습니다.
              </p>
              <span className="closeBtn" onClick={this.clickDetail}></span>
            </div>
          </span>
        </div>
        <div className="priceCount">
          <span>총 수량 {Number(totalCount).toLocaleString()}개</span>
          <strong>{Number(totalPrice).toLocaleString()}원</strong>
        </div>
      </div>
    );
  }
}

export default Price;

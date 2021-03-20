import React from "react";
import "./MyPage.scss";

class MyPageHeartProduct extends React.Component {
  render() {
    const { img, name, price } = this.props;
    return (
      <div className="myPageProductList">
        <img className="myPageProductListImg" src={img} alt="Line Avengers" />
        <div className="myPageProductListAll">
          <div className="myPageProductListName">{name}</div>
          <div className="myPageProductListPrice">{price}원</div>
        </div>
      </div>
    );
  }
}

export default MyPageHeartProduct;

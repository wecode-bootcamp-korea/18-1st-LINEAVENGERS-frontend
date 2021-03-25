import React from "react";
import "./MyPage.scss";

class MyPageProduct extends React.Component {
  popupModal = () => {
    const url = "/Modal";
    const name = "리뷰 쓰기";
    const option = "width=500,height=600";

    const newWindow = window.open(url, name, option);
    newWindow.window.myId = this.props.id;
    newWindow.window.myImgUrl = this.props.img;
    newWindow.window.myName = this.props.name;
  };

  render() {
    const { img, name, price } = this.props;
    return (
      <div className="myPageProductList">
        <img className="myPageProductListImg" src={img} alt="Line Avengers" />
        <div className="myPageProductListAll">
          <div className="myPageProductListName">{name}</div>
          <div className="myPageProductListPrice">{price}원</div>
          <div className="myPageProductListSure">구매확정</div>
          <div className="myPageProductListDetail">
            <div className="myPageProductListDetailTop">
              구매가 완료되었습니다. 이용해주셔서 감사합니다.
            </div>
            <div className="myPageProductListDetailBottom">
              구매확정 이후 상품의 이용방법, 반품 등에 대한 문의는 판매자에게
              문의해주세요.
            </div>
          </div>
        </div>
        <div className="myPageProductListReview">
          <button
            className="myPageProductListReviewWrite"
            onClick={this.popupModal}
          >
            리뷰쓰기
          </button>
        </div>
      </div>
    );
  }
}

export default MyPageProduct;

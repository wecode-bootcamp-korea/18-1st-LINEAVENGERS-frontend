import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ContentTop.scss";
import {
  faChevronLeft,
  faChevronRight,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";

class ContentTop extends Component {
  render() {
    return (
      <section className="contentTop">
        <div className="previewPayWrap">
          <div className="previewContent">
            <div className="previewContainer">
              <div className="previewBox">
                <img
                  src="https://i.pinimg.com/originals/8e/54/9c/8e549cc1717fa1bfc57a7b5030b3c169.jpg"
                  alt="상품 미리보기"
                />
                <button className="slideBtn prev">
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button className="slideBtn next">
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
              <div className="previewListBox">
                <ul className="listWrap">
                  <li className="listItem active">
                    <img
                      src="https://i.pinimg.com/originals/8e/54/9c/8e549cc1717fa1bfc57a7b5030b3c169.jpg"
                      alt="상품 미리보기"
                    />
                  </li>
                  <li className="listItem">
                    <img
                      src="https://i.pinimg.com/originals/8e/54/9c/8e549cc1717fa1bfc57a7b5030b3c169.jpg"
                      alt="상품 미리보기"
                    />
                  </li>
                </ul>
              </div>
              <div className="review">
                <span>
                  리뷰수<strong>5</strong>
                </span>
                <span className="reviewGrade">
                  사용자 총 평점<strong>5.0</strong>
                  <strong>5</strong>
                </span>
              </div>
            </div>
          </div>
          <div className="payContent">
            <h3 className="productTitle">
              라인어벤져스 브라운앤프렌즈 스위트 클리어 스티커
            </h3>
            <p className="productPrice">
              <span className="salePercent">20%</span>
              <div>
                <span className="normalPrice">8000원</span>
                <span className="finalPrice">6,400원</span>
              </div>
            </p>
            <div className="recommendWrap">
              <p className="recommendTitle">라인어벤져스 고객을 위한 혜택</p>
              <div className="recommendPoint">
                <div className="maxPoint">
                  <span className="maxTitle">최대 적립 포인트</span>
                  <div className="maxPrice">
                    <span className="maxValue">
                      100<em>원</em>
                    </span>
                    <button>?</button>
                  </div>
                </div>
                <div className="normalPoint">
                  <span className="normalTitle">기본적립</span>
                  <em className="normalNumber">64원</em>
                </div>
                <div className="morePoint">
                  <div className="moreTotal">
                    <span className="totalTitle">
                      <em>TIP.</em> 포인트 더 받는 방법
                    </span>
                    <span className="totalPrice">
                      +최대 512<em>원</em>
                    </span>
                  </div>
                  <div className="moreMembership">
                    <div className="membershipLeft">
                      <span className="leftNLogo">
                        <em>N</em>
                      </span>
                      <span className="leftPlus">
                        <em>+</em>
                      </span>
                      <span className="leftMembership">
                        <em>멤버쉽</em>
                      </span>
                      <span className="leftInfo">최대 5% 적립, 무료시작</span>
                    </div>
                    <span className="rightValue">256원</span>
                  </div>
                  <div className="morePointPay">
                    <div className="pointPayLeft">
                      <span className="leftNLogo">
                        <em>N</em>
                      </span>
                      <span className="leftPercent">
                        <em>2%</em>
                      </span>
                      <span className="leftInfo">충전포인트로 결제시</span>
                    </div>
                    <span className="rightValue">128원</span>
                  </div>
                  <div className="morePointPay">
                    <div className="pointPayLeft">
                      <span className="leftNLogo">
                        <em>N</em>
                      </span>
                      <span className="leftPercent">
                        <em>2%</em>
                      </span>
                      <span className="leftInfo">MY단골스토에서 결제시</span>
                    </div>
                    <span className="rightValue">128원</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="membershipAd">
              <div className="adLeft">
                <span className="adNLogo">N</span>
                <span className="adInfo">
                  MY단골 2% + 추가 2% = <em>최대 4% 적립!</em>
                </span>
              </div>
            </div>
            <div className="deliverBox">
              <span>무이자 할부</span>
            </div>
            <div className="deliverBox">
              <p>
                <span className="deliverWay">택배배송</span>
                <span className="deliverPrice">
                  3000원
                  <em> (주문시 결제)</em>
                </span>
              </p>
              <span className="deliverInfo">30,000원 이상 구매 시 무료</span>
            </div>
            <div className="selectOption">
              <span className="optionTitle">사이즈</span>
              <span className="optionArrow"></span>
              <ul className="optionWrap">
                <li className="optionList">M</li>
                <li className="optionList">L</li>
              </ul>
            </div>
            <div className="showPrice">
              <div className="priceTitle">
                <span>
                  총 상품 금액
                  <button>?</button>
                  <div className="priceDetail ${detailPop">
                    <p>
                      총 상품금액에{" "}
                      <span>배송비는 포함되어 있지 않습니다.</span>
                      <br />
                      결제시 배송비가 추가될 수 있습니다.
                    </p>
                    <span className="closeBtn"></span>
                  </div>
                </span>
              </div>
              <div className="priceCount">
                <span>총 수량 0개</span>
                <strong>0원</strong>
              </div>
            </div>
            <div className="selectChoice">
              <div className="choiceType">
                <span>
                  <em>N</em>
                </span>
                <em>구매하기</em>
              </div>
              <div className="choiceType">
                <FontAwesomeIcon icon={faComment} />
                톡톡문의
              </div>
              <div className="choiceType">장바구니</div>
              <div className="choiceType">찜하기</div>
            </div>
            <div className="shoppingTip">
              <span>
                <FontAwesomeIcon icon={faInfoCircle} />
                쇼핑할 때 필독 <em>안전거래TIP</em>
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContentTop;

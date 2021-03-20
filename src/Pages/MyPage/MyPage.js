import React, { Component } from "react";
import { Link } from "react-router-dom";
import MyPageNone from "./MyPageNone";
import MyPageProduct from "./MyPageProduct";
import "./MyPage.scss";
import { FiSettings } from "react-icons/fi";
import { RiAlarmWarningLine } from "react-icons/ri";
import {
  AiOutlineCreditCard,
  AiFillLock,
  AiOutlineFieldTime,
} from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import card from "./card.png";

export class MyPage extends Component {
  constructor() {
    super();
    this.state = {
      ProductList: [],
    };
  }

  componentDidMount() {
    fetch("/Data/MyPageProduct.json")
      .then(res => res.json())
      .then(res => this.setState({ ProductList: res }));
  }

  render() {
    console.log(this.state.ProductList);
    return (
      <div className="myPage">
        <nav className="myPageNav">
          <div className="myPageNavTop">
            <div className="myPageNavTopLeft">
              <span class="myPageNavTopLeftLine">Line</span>
              <span>Avengers Shopping</span>
            </div>
            <div className="myPageNavTopRight">
              <div className="myPageNavTopRightBasket">
                <Link to="/ShoppingBasket">장바구니</Link>
              </div>
            </div>
          </div>
          <div className="myPageNavBottom">
            <div className="myPageNavBottomLeft">
              <div>Line Pay</div>
            </div>
            <div className="myPageNavBottomRight">
              <div className="myPageNavBottomRightAccount">결제내역</div>
              <div className="myPageNavBottomRightPoint">포인트</div>
              <div className="myPageNavBottomRightSend">송금</div>
              <div className="myPageNavBottomRightGift">선물함</div>
              <div className="myPageNavBottomRightBenefit">혜택 * 쿠폰</div>
              <div className="myPageNavBottomRightAsk">문의 * 리뷰</div>
            </div>
          </div>
        </nav>
        <main className="myPageMain">
          <aside className="myPageSide">
            <section className="myPageUser">
              <div className="myPageUserProfile">
                <BsPerson size="60" color="lightgray" />
              </div>
              <div className="myPageUserName">nickname</div>
            </section>
            <seciton className="myPageSetting">
              <div className="myPageSettingNormal">
                <FiSettings />
                &nbsp;&nbsp;&nbsp;기본설정
              </div>
              <div className="myPageSettingAlarm">
                <RiAlarmWarningLine />
                &nbsp;&nbsp;&nbsp;알림수신설정
              </div>
              <div className="myPageSettingCard">
                <AiOutlineCreditCard />
                &nbsp;&nbsp;&nbsp;카드/계좌관리
              </div>
              <div className="myPageSettingSecurity">
                <AiFillLock />
                &nbsp;&nbsp;&nbsp;보안/인증
              </div>
              <div className="myPageSettingSending">
                <HiOutlineLocationMarker />
                &nbsp;&nbsp;&nbsp;배송지 관리
              </div>
              <div className="myPageSettingAccount">
                <AiOutlineFieldTime />
                &nbsp;&nbsp;&nbsp;정기/예약결제
              </div>
            </seciton>
            <div className="myPageCardCompany">제휴사</div>
            <section className="myPageCard">
              <img class="myPageCardImage" src={card} alt="Card" />
            </section>
          </aside>
          {this.state.ProductList.length === 0 ? (
            <MyPageNone />
          ) : (
            <article className="myPageProduct">
              {this.state.ProductList.map(product => {
                return (
                  <MyPageProduct
                    img={product.img}
                    name={product.name}
                    price={product.price}
                  />
                );
              })}
            </article>
          )}
        </main>
      </div>
    );
  }
}

export default MyPage;

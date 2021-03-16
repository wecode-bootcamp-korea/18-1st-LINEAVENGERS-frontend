import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MyPage.scss";
import { FiSettings } from "react-icons/fi";
import { RiAlarmWarningLine, RiErrorWarningLine } from "react-icons/ri";
import {
  AiOutlineCreditCard,
  AiFillLock,
  AiOutlineFieldTime,
} from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import card from "./card.png";

export class MyPage extends Component {
  render() {
    return (
      <div className="MyPage">
        <nav className="MyPageNav">
          <div className="MyPageNavTop">
            <div className="MyPageNavTopLeft">
              <span class="MyPageNavTopLeftLine">Line</span>
              <span>Avengers Shopping</span>
            </div>
            <div className="MyPageNavTopRight">
              <div className="MyPageNavTopRightBasket">
                <Link to="/ShoppingBasket">장바구니</Link>
              </div>
            </div>
          </div>
          <div className="MyPageNavBottom">
            <div className="MyPageNavBottomLeft">
              <div>Line Pay</div>
            </div>
            <div className="MyPageNavBottomRight">
              <div className="MyPageNavBottomRightAccount">결제내역</div>
              <div className="MyPageNavBottomRightPoint">포인트</div>
              <div className="MyPageNavBottomRightSend">송금</div>
              <div className="MyPageNavBottomRightGift">선물함</div>
              <div className="MyPageNavBottomRightBenefit">혜택 * 쿠폰</div>
              <div className="MyPageNavBottomRightAsk">문의 * 리뷰</div>
            </div>
          </div>
        </nav>
        <main className="MyPageMain">
          <aside className="MyPageSide">
            <section className="MyPageUser">
              <div className="MyPageUserProfile">
                <BsPerson size="60" color="lightgray" />
              </div>
              <div className="MyPageUserName">nickname</div>
            </section>
            <seciton className="MyPageSetting">
              <div className="MyPageSettingNormal">
                <FiSettings />
                &nbsp;&nbsp;&nbsp;기본설정
              </div>
              <div className="MyPageSettingAlarm">
                <RiAlarmWarningLine />
                &nbsp;&nbsp;&nbsp;알림수신설정
              </div>
              <div className="MyPageSettingCard">
                <AiOutlineCreditCard />
                &nbsp;&nbsp;&nbsp;카드/계좌관리
              </div>
              <div className="MyPageSettingSecurity">
                <AiFillLock />
                &nbsp;&nbsp;&nbsp;보안/인증
              </div>
              <div className="MyPageSettingSending">
                <HiOutlineLocationMarker />
                &nbsp;&nbsp;&nbsp;배송지 관리
              </div>
              <div className="MyPageSettingAccount">
                <AiOutlineFieldTime />
                &nbsp;&nbsp;&nbsp;정기/예약결제
              </div>
            </seciton>
            <div className="CardCompany">제휴사</div>
            <section className="MyPageCard">
              <img class="MyPageCardImage" src={card} alt="Card" />
            </section>
          </aside>
          <article className="MyPageArticle">
            <div class="MyPageArticleWarning">
              <RiErrorWarningLine size="100" opacity="0.1" />
            </div>
            <div class="MyPageArticleNo">내역이 없습니다.</div>
            <div class="MyPageArticleContent">
              라인 어벤져스에서 결제한 모든 내역을 한번에 확인하실 수 있습니다.
            </div>
          </article>
        </main>
      </div>
    );
  }
}

export default MyPage;

import React from "react";
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

class MyPageAside extends React.Component {
  render() {
    return (
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
    );
  }
}

export default MyPageAside;

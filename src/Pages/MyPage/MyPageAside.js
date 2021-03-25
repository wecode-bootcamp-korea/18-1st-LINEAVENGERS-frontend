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
    const names = [
      {
        icon: <FiSettings />,
        tabName: "기본설정",
      },
      {
        icon: <RiAlarmWarningLine />,
        tabName: "알림수신설정",
      },
      {
        icon: <AiOutlineCreditCard />,
        tabName: "보안/인증",
      },
      {
        icon: <AiFillLock />,
        tabName: "보안/인증",
      },
      {
        icon: <AiOutlineFieldTime />,
        tabName: "배송지 관리",
      },
      {
        icon: <HiOutlineLocationMarker />,
        tabName: "정기/예약결제",
      },
    ];
    return (
      <aside className="myPageSide">
        <section className="myPageUser">
          <div className="myPageUserProfile">
            <BsPerson size="60" color="lightgray" />
          </div>
          <div className="myPageUserName">nickname</div>
        </section>
        <ul className="myPageSetting">
          {names.map(name => (
            <li className="myPageSettingTotal">
              {name.icon}&nbsp;&nbsp; {name.tabName}
            </li>
          ))}
        </ul>
        <div className="myPageCardCompany">제휴사</div>
        <section className="myPageCard">
          <img class="myPageCardImage" src={card} alt="Card" />
        </section>
      </aside>
    );
  }
}

export default MyPageAside;

import React from "react";
import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import "./DeliverBanner.scss";

class DeliverBanner extends Component {
  render() {
    return (
      <div className="deliverBanner">
        <span className="bannerTitle">
          배송기간<button className="infoBtn">?</button>
        </span>
        <ul class="bannerInfo">
          <li class="leftContent">
            <span>
              <FontAwesomeIcon icon={faTruck} />이 스토어의 배송기간
            </span>
            <strong>
              평균 배송기간 <em>2일 이내</em> 스토어입니다.
            </strong>
            <em>배송기간은 주말/공휴일을 제외한 영업일 기준</em>
          </li>
          <li class="rightContent">
            <p>
              <span>1일 이내</span>
              <span class="percentBar"></span>
              <span>1447건 (40%)</span>
            </p>
            <p>
              <span>2일 이내</span>
              <span class="percentBar"></span>
              <span>1490건 (41%)</span>
            </p>
            <p>
              <span>3일 이내</span>
              <span class="percentBar"></span>
              <span>600건 (17%)</span>
            </p>
            <p>
              <span>4일 이내</span>
              <span class="percentBar"></span>
              <span>56건 (2%)</span>
            </p>
          </li>
        </ul>
      </div>
    );
  }
}
export default DeliverBanner;

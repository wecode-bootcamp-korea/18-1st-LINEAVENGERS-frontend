import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import "./ReviewContainer.scss";

class ReviewContainer extends Component {
  render() {
    return (
      <section className="reviewContainer">
        <h1>상품리뷰</h1>
        <p className="detailInfo">
          상품을 구매하신 분들이 작성하신 리뷰입니다. 리뷰 작성시 아래 금액만큼
          포인트가 적립됩니다.
        </p>
        <p className="detailInfo">
          <span>
            텍스트 리뷰 : <em>50원</em>
          </span>
          <span>
            포토/동영상 리뷰 : <em>50원</em>
          </span>
          <span>
            한달사용 텍스트 리뷰 : <em>50원</em>
          </span>
          <span>
            한달사용 포토/동영상 리뷰 : <em>50원</em>
          </span>
        </p>
        <div className="reviewListWrap">
          <div className="reviewListTitle">
            <span>리뷰 22건</span>
            <ul>
              <li>랭킹순</li>
              <li>최신순</li>
              <li>평점 높은순</li>
              <li>평점 낮은순</li>
            </ul>
          </div>
          <ul className="reviewList">
            <li className="reviewListItem">
              <div className="listBox">
                <img
                  src="https://profile-phinf.pstatic.net/404/default.png?type=f80_80"
                  alt=""
                />
              </div>
              <div className="listBox">
                <span className="gradeValue">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <em>5</em>
                </span>
                <span className="userInfo">
                  test<em></em>21.02.24.
                </span>
                <span className="optionInfo">사이즈 단품</span>
                <p>테스트</p>
              </div>
              <div className="listBox">
                <img
                  src="https://www.linefriends.com/im/img_ip_thumb1_v2.jpg"
                  alt="리뷰이미지"
                />
              </div>
              <div className="listBox">
                <span>
                  <FontAwesomeIcon icon={faThumbsUp} />
                  <em>0</em>
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div className="reviewPage">
          <ul className="pageBox">
            <li className="pageList">1</li>
          </ul>
        </div>
      </section>
    );
  }
}

export default ReviewContainer;

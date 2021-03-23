import React, { Component } from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Review.scss";

class Review extends Component {
  render() {
    return (
      <div className="reviewWrap">
        <p className="reviewTitle">
          포토/동영상<span>(9)</span>
        </p>
        <ul className="reviewListContainer">
          <li className="reviewListItem">
            <div className="reviewInfo">
              <span className="reviewGrade">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <em>5</em>
              </span>
              <span className="reviewDetail">
                <em>test</em>
                <em>20.08.01</em>
                <em>사이즈: 옵션없음</em>
              </span>
              <p>테스트</p>
            </div>
            <div className="reviewImg">
              <img
                src="https://lh3.googleusercontent.com/proxy/qvJ_GjWD0D-XBdhDNjVWoH6jjNyXL2XuguBWB7O6w8Vtjxly9GIGc9sgq5Vb2IKNSzTq8mpgzOYUfVHF5ZQvRIR7Hr18ag"
                alt="상품 이미지"
              />
            </div>
          </li>
          <li className="reviewListItem">
            <div className="reviewInfo">
              <span className="reviewGrade">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <em>5</em>
              </span>
              <span className="reviewDetail">
                <em>test</em>
                <em>20.08.01</em>
                <em>사이즈: 옵션없음</em>
              </span>
              <p>테스트</p>
            </div>
            <div className="reviewImg">
              <img
                src="https://lh3.googleusercontent.com/proxy/qvJ_GjWD0D-XBdhDNjVWoH6jjNyXL2XuguBWB7O6w8Vtjxly9GIGc9sgq5Vb2IKNSzTq8mpgzOYUfVHF5ZQvRIR7Hr18ag"
                alt="상품 이미지"
              />
            </div>
          </li>
          <li className="reviewListItem">
            <div className="reviewInfo">
              <span className="reviewGrade">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <em>5</em>
              </span>
              <span className="reviewDetail">
                <em>test</em>
                <em>20.08.01</em>
                <em>사이즈: 옵션없음</em>
              </span>
              <p>테스트</p>
            </div>
            <div className="reviewImg">
              <img
                src="https://lh3.googleusercontent.com/proxy/qvJ_GjWD0D-XBdhDNjVWoH6jjNyXL2XuguBWB7O6w8Vtjxly9GIGc9sgq5Vb2IKNSzTq8mpgzOYUfVHF5ZQvRIR7Hr18ag"
                alt="상품 이미지"
              />
            </div>
          </li>
          <li className="reviewListItem">
            <div className="reviewInfo">
              <span className="reviewGrade">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <em>5</em>
              </span>
              <span className="reviewDetail">
                <em>test</em>
                <em>20.08.01</em>
                <em>사이즈: 옵션없음</em>
              </span>
              <p>테스트</p>
            </div>
            <div className="reviewImg">
              <img
                src="https://lh3.googleusercontent.com/proxy/qvJ_GjWD0D-XBdhDNjVWoH6jjNyXL2XuguBWB7O6w8Vtjxly9GIGc9sgq5Vb2IKNSzTq8mpgzOYUfVHF5ZQvRIR7Hr18ag"
                alt="상품 이미지"
              />
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Review;

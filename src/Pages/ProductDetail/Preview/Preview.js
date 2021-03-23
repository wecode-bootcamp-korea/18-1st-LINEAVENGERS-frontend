import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Preview.scss";

class Preview extends Component {
  render() {
    return (
      <div className="preview">
        <div className="previewImgBox">
          <img
            src="https://obj-sg.thewiki.kr/data/2f6c697665626f6172642f626c6f7465722f65636234626634303864333934346564386364333232386630303466613237352e706e67.png"
            alt="상품 미리보기"
          ></img>
          <button className="slideBtn prev">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="slideBtn next">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <ul className="previewImgList">
          <li>
            <img
              src="https://obj-sg.thewiki.kr/data/2f6c697665626f6172642f626c6f7465722f65636234626634303864333934346564386364333232386630303466613237352e706e67.png"
              alt="상품 미리보기"
            />
          </li>
          <li>
            <img
              src="https://obj-sg.thewiki.kr/data/2f6c697665626f6172642f626c6f7465722f65636234626634303864333934346564386364333232386630303466613237352e706e67.png"
              alt="상품 미리보기"
            />
          </li>
          <li>
            <img
              src="https://obj-sg.thewiki.kr/data/2f6c697665626f6172642f626c6f7465722f65636234626634303864333934346564386364333232386630303466613237352e706e67.png"
              alt="상품 미리보기"
            />
          </li>
        </ul>
        <div className="reviewData">
          <span>
            리뷰수<em>22</em>
          </span>
          <span>
            사용자 총 평점<em>5.0</em>/<em>5</em>
          </span>
        </div>
      </div>
    );
  }
}

export default Preview;

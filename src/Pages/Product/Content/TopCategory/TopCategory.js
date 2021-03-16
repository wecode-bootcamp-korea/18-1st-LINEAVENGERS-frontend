import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./TopCategory.scss";

class CategoryList extends Component {
  render() {
    return (
      <ul className="top-category">
        <li className="category-list">
          <Link to="/main">홈</Link>
        </li>
        <li className="category-list">
          <span className="category-selected">캐릭터</span>
          <span className="category-count">
            (총
            <strong className="count-num"> 1,932</strong>개)
          </span>
          <span className="content-triangle"></span>
          <ul className="category-choice">
            <li className="choice-list">캐릭터</li>
            <li className="choice-list">NEW</li>
            <li className="choice-list">선물추천</li>
          </ul>
        </li>
        <li className="category-list">
          <span className="category-selected">캐릭터</span>
          <span className="category-count">
            (총
            <strong className="count-num"> 1,932</strong>개)
          </span>
          <span className="content-triangle"></span>
          <ul className="category-choice">
            <li className="choice-list">캐릭터</li>
            <li className="choice-list">NEW</li>
            <li className="choice-list">선물추천</li>
          </ul>
        </li>
      </ul>
    );
  }
}

export default CategoryList;

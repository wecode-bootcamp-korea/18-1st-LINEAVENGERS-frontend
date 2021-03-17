import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./Category.scss";

class CategoryList extends Component {
  render() {
    return (
      <div className="category">
        <div className="categoryMenu">
          <span>캐릭터</span>
        </div>
        <div className="subMenuContainer">
          <a className="subMenu" href="#none">
            브라운 프렌즈
          </a>
          <a className="subMenu" href="#none">
            BT21
          </a>
          <a className="subMenu" href="#none">
            브롤스타즈
          </a>
          <a className="subMenu" href="#none">
            WDZY
          </a>
        </div>
      </div>
    );
  }
}

export default CategoryList;

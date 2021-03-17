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
          <Link to="#none" className="subMenu">
            브라운 프렌즈
          </Link>
          <Link to="#none" className="subMenu">
            BT21
          </Link>
          <Link to="#none" className="subMenu">
            브롤스타즈
          </Link>
          <Link to="#none" className="subMenu">
            WDZY
          </Link>
        </div>
      </div>
    );
  }
}

export default CategoryList;

import React, { Component } from "react";
import { Link } from "react-router-dom";
// import SubMenuList from "./SubMenuList/SubMenuList";
import "./CategoryList.scss";

export class CategoryList extends Component {
  render() {
    const { itsCategoryList } = this.props;

    return (
      <div className="categoryList">
        {itsCategoryList.map(menuObj => {
          return (
            <div className="categoryMenu">
              <span className="categoryText">{menuObj.menu}</span>

              <div className="subMenuList">
                {menuObj.subMenuList.map(subMenuObj => (
                  <Link to="#none" className="subMenu">
                    {subMenuObj.subMenu}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CategoryList;

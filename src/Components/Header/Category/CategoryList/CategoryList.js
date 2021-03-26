import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CategoryList.scss";

export class CategoryList extends Component {
  render() {
    const { itsCategoryList } = this.props;

    return (
      <div className="categoryList">
        {itsCategoryList.map(menuObj => {
          return (
            <div className="categoryMenu">
              <Link
                className="categoryMenuLink"
                to={`/product?menu=${menuObj.menuId}`}
              >
                <span className="categoryText">{menuObj.menuName}</span>
              </Link>

              {menuObj.categoryList.length > 0 && (
                <div className="subMenuList">
                  {menuObj.categoryList.map(subMenuObj => (
                    <Link
                      to={`/product?menu=${menuObj.menuId}&category=${subMenuObj.categoryId}`}
                      className="subMenuLink"
                    >
                      {subMenuObj.categoryName}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default CategoryList;

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
              <span className="categoryText">{menuObj.menuName}</span>

              {menuObj.categoryList.length > 0 && (
                <div className="subMenuList">
                  {menuObj.categoryList.map(subMenuObj => (
                    <Link to="/productDetail" className="subMenu">
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

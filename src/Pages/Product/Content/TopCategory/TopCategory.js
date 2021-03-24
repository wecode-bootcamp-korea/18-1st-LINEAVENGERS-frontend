import React, { Component } from "react";
import { Link } from "react-router-dom";
import CategorySelect from "./Component/CategorySelect";
import "./TopCategory.scss";

class CategoryList extends Component {
  state = {
    firstTab: false,
    secondTab: false,
  };

  handleTab = (e, tabIndex) => {
    const { firstTab, secondTab } = this.state;
    this.setState({
      firstTab: tabIndex === 1 ? !firstTab : false,
      secondTab: tabIndex === 2 ? !secondTab : false,
    });
  };

  render() {
    const { current, menuList, categoryList, handleCategory } = this.props;
    const { firstTab, secondTab } = this.state;
    const { type, title, count } = current[0];
    const categoryLiEl = new Array(3).fill(0);

    return (
      <ul className="topCategory">
        {categoryLiEl.map((e, index) => {
          const selectType =
            (index === 1 && type === "menu") ||
            (index !== 1 && type === "category");
          return index === 0 ? (
            <li className="categoryList">
              <Link to="/main">홈</Link>
            </li>
          ) : (
            <li className="categoryList">
              <CategorySelect
                select={selectType}
                title={index === 1 ? (type === "main" ? title : "전체") : title}
                firstTab={firstTab}
                secondTab={secondTab}
                tabIndex={index}
                count={count}
                dataList={index === 1 ? menuList : categoryList}
                handleTab={this.handleTab}
                handleCategory={handleCategory}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default CategoryList;

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
    const {
      current,
      count,
      nowCategory,
      categoryData,
      handleCategory,
      contentTitle,
    } = this.props;
    const { firstTab, secondTab } = this.state;
    const categoryLiEl = new Array(3).fill(0);
    const menuList = categoryData.map(e => {
      return { id: e.menuId, name: e.menuName };
    });

    return (
      <ul className="topCategory">
        {categoryLiEl.map((e, index) => {
          const selectType =
            (index === 1 && current.title === "메인") ||
            (index !== 1 && current.title === "서브");
          return index === 0 ? (
            <li className="categoryList">
              <Link to="/main">홈</Link>
            </li>
          ) : (
            <li className="categoryList">
              <CategorySelect
                select={selectType}
                title={
                  index === 1
                    ? current.title === "메인"
                      ? contentTitle
                      : "전체"
                    : current.title === "서브"
                    ? contentTitle
                    : "전체"
                }
                firstTab={firstTab}
                secondTab={secondTab}
                tabIndex={index}
                count={count}
                handleTab={this.handleTab}
                handleCategory={handleCategory}
                menuId={nowCategory.menuId}
                dataList={index === 1 ? menuList : nowCategory.categoryList}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default CategoryList;

import React, { Component } from "react";
import "./CategorySelect.scss";

class CategorySelect extends Component {
  render() {
    const {
      dataList,
      select,
      title,
      firstTab,
      secondTab,
      tabIndex,
      count,
      handleTab,
      handleCategory,
      menuId,
    } = this.props;

    const isActive =
      (tabIndex === 1 && firstTab) || (tabIndex !== 1 && secondTab);

    return (
      <>
        <span className="categorySelected">{title}</span>
        {select && <span className="categoryCount">(총{count}개)</span>}
        <span
          className="contentTriangle"
          onClick={e => {
            handleTab(e, tabIndex);
          }}
        ></span>
        <ul className={`categoryChoice ${isActive ? "active" : ""}`}>
          {dataList.map(list => (
            <li
              key={tabIndex === 1 ? list.id : list.categoryId}
              className="choiceList"
              onClick={e => {
                handleTab(e, tabIndex);
                handleCategory(
                  e,
                  tabIndex === 1 ? [list.id] : [menuId, list.categoryId]
                );
              }}
            >
              {tabIndex === 1 ? list.name : list.categoryName}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default CategorySelect;

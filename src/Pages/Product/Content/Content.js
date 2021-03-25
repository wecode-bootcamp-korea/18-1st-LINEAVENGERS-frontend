import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import TopCategory from "./TopCategory/TopCategory";
import "./Content.scss";

class Content extends Component {
  state = {
    checkSort: 1,
    checkSetting: 1,
    checkView: false,
  };

  handleTypeCheck = (e, Typeid) => {
    this.setState({
      checkSort: Typeid,
    });
  };

  handleSettingCheck = (e, Settingid) => {
    this.setState({
      checkSetting: Settingid,
    });
  };

  handleViewCheck = () => {
    const { checkView } = this.state;
    this.setState({
      checkView: !checkView,
    });
  };

  render() {
    const {
      handleSort,
      handleDeliver,
      handleGrid,
      handlePageSize,
      handleCategory,
      pageSize,
      current,
      count,
      nowCategory,
      categoryData,
    } = this.props;
    const { checkSort, checkSetting, checkView } = this.state;
    const { data, title } = current;
    const contentTitle = title === "서브" ? data.categoryName : data.menuName;

    return (
      <section className="contentWrap">
        <div className="contentTop">
          <strong className="topTitle">{contentTitle}</strong>
          <TopCategory
            contentTitle={contentTitle}
            current={current}
            count={count}
            nowCategory={nowCategory}
            categoryData={categoryData}
            handleCategory={handleCategory}
          />
        </div>
        <div className="contentSort">
          <ul className="sortType">
            {sortTypes.map((type, index) => (
              <li
                key={index}
                className={`typeList ${checkSort === type.id ? "checked" : ""}`}
                onClick={e => {
                  this.handleTypeCheck(e, type.id);
                  handleSort(e, type.id);
                }}
              >
                <FontAwesomeIcon className="typeCheck" icon={faCheck} />
                {type.title}
              </li>
            ))}
          </ul>
          <div className="optionType">
            <div className="optionFreeDeliver">
              <input id="check" type="checkbox" />
              <label
                className="deliverBtnWrap"
                for="check"
                onClick={handleDeliver}
              >
                <span className="deliverBtnTitle">무료배송</span>
                <i className="deliverBtn"></i>
              </label>
            </div>
            <div
              className={`optionViewCount ${checkView && "active"}`}
              onClick={this.handleViewCheck}
            >
              <button className="viewBtn">
                {pageSize}개씩 보기
                <span className="contentTriangle"></span>
                <ul className="viewChoice">
                  {viewTypes.map((view, index) => (
                    <li
                      key={index}
                      className="choiceList"
                      onClick={e => {
                        handlePageSize(e, index);
                      }}
                    >
                      {view.title}
                    </li>
                  ))}
                </ul>
              </button>
            </div>
            <ul className="optionViewSetting">
              {settingTypes.map((setting, index) => (
                <li
                  key={index}
                  className={`settingType ${
                    checkSetting === setting.id ? "active" : ""
                  }`}
                  onClick={e => {
                    this.handleSettingCheck(e, setting.id);
                    handleGrid(e, setting.id);
                  }}
                ></li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Content;

const sortTypes = [
  { id: 0, title: "인기도순" },
  { id: 1, title: "낮은가격순" },
  { id: 2, title: "최신등록순" },
  { id: 3, title: "리뷰많은순" },
  { id: 4, title: "평점높은순" },
];

const viewTypes = [
  { id: 0, title: "20개씩 보기" },
  { id: 1, title: "40개씩 보기" },
  { id: 2, title: "60개씩 보기" },
];

const settingTypes = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];

import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./Content.scss";
import TopCategory from "./TopCategory/TopCategory";

class Content extends Component {
  state = {
    checkSort: 0,
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
    console.log(checkView);
    this.setState({
      checkView: !checkView,
    });
  };

  render() {
    const { checkSort, checkSetting, checkView } = this.state;
    return (
      <section className="content-wrap">
        <div className="content-top">
          <strong className="top-title">캐릭터</strong>
          <TopCategory />
        </div>
        <div className="content-sort">
          <ul className="sort-type">
            {sortTypes.map((type, index) => (
              <li
                key={index}
                className={`type-list ${
                  checkSort === type.id ? "checked" : ""
                }`}
                onClick={e => {
                  this.handleTypeCheck(e, type.id);
                }}
              >
                <FontAwesomeIcon className="type-check" icon={faCheck} />
                {type.title}
              </li>
            ))}
          </ul>
          <div className="option-type">
            <div className="option-free-deliver">
              <input id="check" type="checkbox" />
              <label className="deliver-btn-wrap" for="check">
                <span className="deliver-btn-title">무료배송</span>
                <i className="deliver-btn"></i>
              </label>
            </div>
            <div
              className={`option-view-count ${checkView && "active"}`}
              onClick={this.handleViewCheck}
            >
              <button className="view-btn">
                40개씩 보기
                <span className="content-triangle"></span>
                <ul className="view-choice">
                  {viewTypes.map((view, index) => (
                    <li key={index} className="choice-list">
                      {view.title}
                    </li>
                  ))}
                </ul>
              </button>
            </div>
            <ul className="option-view-setting">
              {settingTypes.map((setting, index) => (
                <li
                  key={index}
                  className={`setting-type ${
                    checkSetting === setting.id ? "active" : ""
                  }`}
                  onClick={e => {
                    this.handleSettingCheck(e, setting.id);
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

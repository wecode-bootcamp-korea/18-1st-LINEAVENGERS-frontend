import React, { Component } from "react";
import PayMenu from "./Components/PayMenu";
import "./TopMenu.scss";

class TopMenu extends Component {
  state = {
    topMenuActive: false,
    payMenuActive: false,
  };

  handlePayMenu = () => {
    const { payMenuActive } = this.state;
    this.setState({
      payMenuActive: !payMenuActive,
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", e => {
      const { topMenuActive } = this.state;

      if (window.scrollY >= 1200) {
        if (topMenuActive) return;
        else
          this.setState({
            topMenuActive: !topMenuActive,
          });
      } else {
        if (topMenuActive)
          this.setState({
            topMenuActive: !topMenuActive,
          });
        else return;
      }
    });
  }

  render() {
    const {
      TopMenuData: { imgUrls, name, options, price, reviews, type },
      selectList,
      addSelect,
      deleteSelect,
      clickCount,
      countChange,
      tabIndex,
      tabClick,
    } = this.props;
    const { topMenuActive, payMenuActive } = this.state;
    const finalPrice =
      price.sale !== 0
        ? price.normal - (price.normal * price.sale) / 100
        : price.normal;
    return (
      <div className={`topMenuContainer ${topMenuActive && "active"}`}>
        <div className="topMenuInnerWrap">
          <div className="productMenu">
            <img src={imgUrls[0]} alt="상품 이미지" />
            <div className="productInfo">
              <span>{name}</span>
              <p className="productPrice">
                <span>{Number(finalPrice).toLocaleString()}원</span>
                <span>
                  {price.sale !== 0 && Number(price.normal).toLocaleString()}원
                </span>
              </p>
            </div>
            {!payMenuActive ? (
              <button onClick={this.handlePayMenu}>
                <em>N</em>구매하기
              </button>
            ) : (
              <em onClick={this.handlePayMenu}></em>
            )}
          </div>
          {payMenuActive && (
            <PayMenu
              price={price}
              type={type}
              options={options}
              selectList={selectList}
              addSelect={addSelect}
              deleteSelect={deleteSelect}
              clickCount={clickCount}
              countChange={countChange}
            />
          )}
          <ul className="tabMenu">
            {tabList.map(tab => (
              <li
                key={tab.id}
                className={tab.id === tabIndex && "active"}
                onClick={e => {
                  tabClick(e, tab.id);
                }}
              >
                {tab.id === 1 ? `${tab.title} ${reviews.length}` : tab.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const tabList = [
  { id: 0, title: "상세정보" },
  { id: 1, title: `리뷰` },
  { id: 2, title: "Q&A" },
  { id: 3, title: "반품/교환정보" },
];

export default TopMenu;

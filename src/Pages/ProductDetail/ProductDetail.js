import React, { Component } from "react";
import Pay from "./Pay/Pay";
import Preview from "./Preview/Preview";
import Review from "./Review/Review";
import DetailContainer from "./DetailContainer/DetailContainer";
import ReviewContainer from "./ReviewContainer/ReviewContainer";
import QAContainer from "./QAContainer/QAContainer";
import "./ProductDetail.scss";
import TopMenu from "./TopMenu/TopMenu";
import RefundContainer from "./RefundContainer/RefundContainer";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.DetailContainer = React.createRef();
    this.ReviewContainer = React.createRef();
    this.QAContainer = React.createRef();
    this.RefundContainer = React.createRef();
  }

  state = {
    tabIndex: 0,
    selectList: [],
    productData: {},
  };

  tabClick = (e, tabIndex) => {
    const detail = this.DetailContainer.current.offsetTop;
    const review = this.ReviewContainer.current.offsetTop - 150;
    const qa = this.QAContainer.current.offsetTop - 150;
    const refund = this.RefundContainer.current.offsetTop;

    if (tabIndex === 0) window.scrollTo({ top: detail, behavior: "smooth" });
    else if (tabIndex === 1)
      window.scrollTo({ top: review, behavior: "smooth" });
    else if (tabIndex === 2) window.scrollTo({ top: qa, behavior: "smooth" });
    else window.scrollTo({ top: refund, behavior: "smooth" });

    this.setState({
      tabIndex: tabIndex,
    });
  };

  addSelect = (e, option, price) => {
    const { selectList } = this.state;
    const newSelect = { option, price, countValue: 1 };
    let depulicateCheck = false;

    selectList.forEach(list => {
      if (list.option === newSelect.option) {
        depulicateCheck = true;
        return;
      }
    });
    if (depulicateCheck) {
      alert("이미 선택한 옵션입니다.");
      return;
    } else {
      this.setState({
        selectList: [...selectList, newSelect],
      });
    }
  };

  deleteSelect = (e, option) => {
    const { selectList } = this.state;
    this.setState({
      selectList: selectList.filter(list => list.option !== option),
    });
  };

  clickCount = (e, option, countValue) => {
    const { className } = e.target;
    const btnType = className;
    const { selectList } = this.state;

    if (countValue === 1 && btnType === "minus") {
      alert("1개 이상 구매할 수 있습니다.");
      return;
    } else if (countValue >= 10000 && btnType === "plus") {
      alert("최대 10,000개 이하로 구매하실 수 있습니다.");
      return;
    }

    this.setState({
      selectList: selectList.map(list => {
        if (list.option === option) {
          if (btnType === "minus") {
            return { ...list, countValue: list.countValue - 1 };
          } else return { ...list, countValue: list.countValue + 1 };
        } else return list;
      }),
    });
  };

  countChange = (e, option) => {
    const { value } = e.target;
    const { selectList } = this.state;
    let finalValue = 0;

    if (Number(value) >= 10000) {
      alert("10,000 개 이하로 구매하실 수 있습니다.");
      finalValue = 10000;
    } else if (Number(value) === 0 && value === "") {
      alert("1개 이상 구매할 수 있습니다");
      finalValue = 1;
    } else if (isNaN(Number(value))) {
      alert("숫자만 입력이 가능합니다.");
      finalValue = 1;
    } else finalValue = Number(value);

    this.setState({
      selectList: selectList.map(list => {
        if (list.option === option) return { ...list, countValue: finalValue };
        else return list;
      }),
    });
  };

  componentDidMount() {
    fetch("http://localhost:3000/data/ProductDetail.json", { method: "GET" })
      .then(res => res.json())
      .then(res =>
        this.setState({
          productData: res,
        })
      );
  }
  render() {
    const { productData, selectList, tabIndex } = this.state;
    const { imgUrls, name, options, price, reviews, type } = productData;
    const TopMenuData = { imgUrls, name, options, price, reviews, type };
    const PreviewData = { imgUrls, reviews };
    const PayData = { name, options, price, type };
    const ReviewData = { reviews };

    return (
      <div className="productDetailWrap">
        {Object.keys(productData).length === 0 ? (
          <div>Loading</div>
        ) : (
          <>
            <TopMenu
              tabIndex={tabIndex}
              TopMenuData={TopMenuData}
              selectList={selectList}
              tabClick={this.tabClick}
              clickCount={this.clickCount}
              countChange={this.countChange}
              addSelect={this.addSelect}
              deleteSelect={this.deleteSelect}
            />
            <section className="contentTop">
              <div className="previewPay">
                <Preview PreviewData={PreviewData} />
                <Pay
                  PayData={PayData}
                  selectList={selectList}
                  clickCount={this.clickCount}
                  countChange={this.countChange}
                  addSelect={this.addSelect}
                  deleteSelect={this.deleteSelect}
                />
              </div>
              <Review ReviewData={ReviewData} />
            </section>
            <DetailContainer
              DetailContainer={this.DetailContainer}
              tabClick={this.tabClick}
              tabIndex={tabIndex}
            />
            <ReviewContainer
              ReviewData={ReviewData}
              ReviewContainer={this.ReviewContainer}
            />
            <QAContainer QAContainer={this.QAContainer} />
            <RefundContainer RefundContainer={this.RefundContainer} />
          </>
        )}
      </div>
    );
  }
}

export default ProductDetail;

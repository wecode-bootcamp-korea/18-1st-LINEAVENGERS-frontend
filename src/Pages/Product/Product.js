import React, { Component } from "react";
import Content from "./Content/Content";
import ProductList from "./ProductList/ProductList";
import PageLoad from "../../Components/PageLoad/PageLoad";
import { withRouter } from "react-router-dom";
import "./Product.scss";

export class Product extends Component {
  state = {
    freeClick: false,
    page: 0,
    pageOffset: 0,
    gridType: 1,
    pageSize: 20,
    count: 0,
    current: [],
    pageData: [],
    productData: [],
    categoryData: [],
  };

  initialCategroyData = () => {
    fetch("http://f26178ab78f6.ngrok.io/product/main-category")
      .then(res => res.json())
      .then(res => {
        this.setState({
          categoryData: res.menuList,
        });
      });
  };

  initialProductData = () => {
    fetch(`http://f26178ab78f6.ngrok.io/product${this.props.location.search}`)
      .then(res => {
        return res.json();
      })
      .then(res => {
        const { pageOffset, pageSize } = this.state;
        this.setState({
          productData: res.productList,
          count: res.count,
          page: Math.ceil(res.productList.length / pageSize),
          pageData: res.productList.slice(pageOffset, pageSize),
        });
      });
  };

  initialSort = () => {
    const { productData } = this.state;

    return productData.sort((a, b) => {
      if (a.price.sale && b.price.sale) {
        return (
          a.price.normal -
          (a.price.normal * a.price.sale) / 100 -
          (b.price.normal - (b.price.normal * b.price.sale) / 100)
        );
      } else if (a.price.sale) {
        return (
          a.price.normal -
          (a.price.normal * a.price.sale) / 100 -
          b.price.normal
        );
      } else if (b.price.sale) {
        return (
          a.price.normal -
          (b.price.normal - (b.price.normal * b.price.sale) / 100)
        );
      } else {
        return a.price.normal - b.price.normal;
      }
    });
  };

  handleSort = (e, id) => {
    const { productData } = this.state;
    const sortDataType = [
      {
        type: productData
          .filter(data => data.type === "TOP")
          .concat(productData.filter(data => data.type === "BEST"))
          .concat(productData.filter(data => data.type === "NEW"))
          .concat(productData.filter(data => data.type === "NORMAL")),
      },
      { type: this.initialSort() },
      {
        type: productData.sort(
          (a, b) => new Date(a.createDate) - new Date(b.createDate)
        ),
      },
      { type: productData.sort((a, b) => b.review - a.review) },
      { type: productData.sort((a, b) => b.grade - a.grade) },
    ];
    this.setState({
      productData: sortDataType[id].type,
    });
  };

  handleDeliver = () => {
    const { freeClick } = this.state;
    this.setState({
      freeClick: !freeClick,
    });
  };

  handleGrid = (e, id) => {
    this.setState({
      gridType: id,
    });
  };

  handlePage = (e, pageNumber) => {
    this.setState({
      pageOffset: pageNumber,
    });
  };

  handlePageSize = (e, index) => {
    const { productData } = this.state;
    const pageSize = [{ size: 20 }, { size: 40 }, { size: 60 }];
    this.setState({
      pageOffset: 0,
      pageSize: pageSize[index].size,
      page: Math.ceil(productData.length / pageSize[index].size),
      pageData: productData(0, pageSize[index].size),
    });
  };

  // 카테고리 변경 시 fetch 추가될 부분
  handleCategory = (e, idList) => {
    const query =
      idList.length === 1
        ? `?menu=${idList[0]}`
        : `?menu=${idList[0]}&category=${idList[1]}`;
    this.props.history.push(`product${query}`);
  };

  componentDidMount() {
    this.initialProductData();
    this.initialCategroyData();
  }

  render() {
    const {
      freeClick,
      categoryData,
      productData,
      gridType,
      page,
      pageOffset,
      pageSize,
      count,
    } = this.state;

    const showData = freeClick
      ? productData.filter(data => data.free_shipping === true)
      : productData.slice(
          pageOffset * pageSize,
          pageOffset * pageSize + pageSize
        );

    const query = this.props.location.search.split("&");
    const menuData = [];
    let current = {};
    let nowCategory = [];

    for (let i in query) {
      const list = query[i];
      menuData.push(list[list.length - 1]);
    }

    if (categoryData.length !== 0) {
      if (menuData.length === 1) {
        current = { data: categoryData[menuData[0] - 1], title: "메인" };
      } else {
        current = {
          data: categoryData[menuData[0] - 1].categoryList[menuData[1] - 1],
          title: "서브",
        };
      }
      nowCategory = categoryData[menuData[0] - 1];
    }

    return (
      <main className="product">
        {productData.length === 0 || categoryData.length === 0 ? (
          <PageLoad />
        ) : (
          <div className="productContainer">
            <Content
              count={count}
              current={current}
              nowCategory={nowCategory}
              categoryData={categoryData}
              pageSize={pageSize}
              handleSort={this.handleSort}
              handleDeliver={this.handleDeliver}
              handleGrid={this.handleGrid}
              handlePageSize={this.handlePageSize}
              handleCategory={this.handleCategory}
            />
            <ProductList
              data={showData}
              gridType={gridType}
              page={page}
              pageOffset={pageOffset}
              handlePage={this.handlePage}
            />
          </div>
        )}
      </main>
    );
  }
}
export default withRouter(Product);

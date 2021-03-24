import React, { Component } from "react";
import Content from "./Content/Content";
import ProductList from "./ProductList/ProductList";
import PageLoad from "../../Components/PageLoad/PageLoad";
import "./Product.scss";

export class Product extends Component {
  state = {
    freeClick: false,
    page: 0,
    pageOffset: 0,
    gridType: 1,
    pageSize: 20,
    pageData: [],
    productData: [],
    categoryData: [],
  };

  initialProductData = () => {
    fetch("http://7667db542507.ngrok.io/product?menu=1&category=1")
      .then(res => res.json())
      .then(res => {
        const { pageOffset, pageSize } = this.state;
        this.setState({
          productData: res.productList,
          categoryData: res.categoryData,
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
  handleCategory = (e, id) => {};

  componentDidMount() {
    this.initialProductData();
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
    } = this.state;

    const showData = freeClick
      ? productData.filter(data => data.free_shipping === true)
      : productData.slice(
          pageOffset * pageSize,
          pageOffset * pageSize + pageSize
        );

    return (
      <main className="product">
        {productData.length === 0 || categoryData.length === 0 ? (
          <PageLoad />
        ) : (
          <div className="productContainer">
            <Content
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
export default Product;

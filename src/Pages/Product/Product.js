import React, { Component } from "react";
import Content from "./Content/Content";
import ProductList from "./ProductList/ProductList";
import PageLoad from "../../Components/PageLoad/PageLoad";
import "./Product.scss";

export class Product extends Component {
  state = {
    productData: [],
    categoryData: [],
    freeClick: false,
    gridType: 1,
    page: 0,
    pageOffset: 0,
    pageSize: 20,
    pageData: [],
  };

  initialProductData = async () => {
    fetch("http://0f4dd1bb4831.ngrok.io/product/test1?menu=1&category=1", {
      method: "GET",
    })
      .then(res => res.json())
      .then(res => {
        const { pageSize } = this.state;
        this.setState(
          {
            productData: res.productList,
            page: Math.ceil(res.productList.length / pageSize),
          },
          () => {
            const { productData, pageOffset, pageSize } = this.state;
            this.setState({
              pageData: productData.slice(pageOffset, pageSize),
            });
          }
        );
      });
  };

  initialCategoryData = () => {
    fetch("http://0f4dd1bb4831.ngrok.io/product/category?menu=1&category=1", {
      method: "GET",
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          categoryData: res,
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
    this.setState({
      productData:
        id === 0
          ? productData
              .filter(data => data.type === "TOP")
              .concat(productData.filter(data => data.type === "BEST"))
              .concat(productData.filter(data => data.type === "NEW"))
              .concat(productData.filter(data => data.type === "NORMAL"))
          : id === 1
          ? this.initialSort()
          : id === 2
          ? productData.sort(
              (a, b) => new Date(a.createDate) - new Date(b.createDate)
            )
          : id === 3
          ? productData.sort((a, b) => b.review - a.review)
          : productData.sort((a, b) => b.grade - a.grade),
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
    this.setState(
      {
        pageOffset: 0,
        pageSize: index === 0 ? 20 : index === 1 ? 40 : 60,
      },
      () => {
        const { pageSize, productData, pageOffset } = this.state;
        this.setState({
          page: Math.ceil(productData.length / pageSize),
          pageData: productData.slice(
            pageOffset * pageSize,
            pageOffset * pageSize + pageSize
          ),
        });
      }
    );
  };

  // 카테고리 변경 시 fetch 추가될 부분
  handleCategory = (e, id) => {};

  componentDidMount() {
    this.initialProductData();
    this.initialCategoryData();
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

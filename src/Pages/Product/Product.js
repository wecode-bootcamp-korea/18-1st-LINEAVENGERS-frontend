import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { URL } from "../../config";
import Content from "./Content/Content";
import ProductList from "./ProductList/ProductList";
import PageLoad from "../../Components/PageLoad/PageLoad";
import ProductDetailModal from "../../Components/ProductDetailModal/ProductDetailModal";
import "./Product.scss";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

export class Product extends Component {
  state = {
    freeClick: false,
    page: 0,
    pageOffset: 0,
    gridType: 1,
    pageSize: 20,
    count: 0,
    modalPopCheck: false,
    modalData: {},
    current: [],
    pageData: [],
    productData: [],
    categoryData: [],
  };

  moveToProduct = (e, id) => {
    const { className } = e.target;
    if (
      className === "choiceLike" ||
      className === "choiceDetail" ||
      className.includes("titleHeart")
    )
      return;
    else {
      this.props.history.push(`/product/detail/${id}`);
    }
  };

  initialCategroyData = () => {
    fetch(`${URL}/product/main-category`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          categoryData: res.menuList,
        });
      });
  };

  initialProductData = () => {
    fetch(`${URL}/product${this.props.location.search}`)
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(res => {
        console.log(res);
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
    return productData.sort(
      (a, b) =>
        a.price.normal -
        (a.price.normal * a.price.sale) / 100 -
        (b.price.normal - (b.price.normal * b.price.sale) / 100)
    );
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
          ? productData.sort(
              (a, b) =>
                a.price.normal -
                (a.price.normal * a.price.sale) / 100 -
                b.price.normal -
                (b.price.normal * b.price.sale) / 100
            )
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
    const { productData } = this.state;
    const pageSize = [{ size: 20 }, { size: 40 }, { size: 60 }];
    this.setState({
      pageOffset: 0,
      pageSize: pageSize[index].size,
      page: Math.ceil(productData.length / pageSize[index].size),
      pageData: productData.slice(0, pageSize[index].size),
    });
  };

  handleCategory = (e, idList) => {
    const query =
      idList.length === 1
        ? `?menu=${idList[0]}`
        : `?menu=${idList[0]}&category=${idList[1]}`;
    this.props.history.push(`product${query}`);
  };

  getProductData = (e, productId) => {
    fetch(`${URL}/product/detail/${productId}`)
      .then(res => res.json())
      .then(res =>
        this.setState({
          modalData: res.productDetail,
          modalPopCheck: true,
        })
      );
  };

  handleModal = () => {
    const { modalPopCheck } = this.state;
    this.setState({
      modalData: [],
      modalPopCheck: !modalPopCheck,
    });
  };

  addCart = (e, productId, selectList, options) => {
    fetch(`${URL}/order/cart/${productId}`, {
      method: "POST",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.TGXxK_c43ROKMfF_QPUWar7uWlzhYZaCCVyudlpHMKg",
      },
      body: JSON.stringify({
        size_id: 1,
        quantity: 1,
      }),
    })
      .then(res => res.json())
      .then(res => console.log(res));
  };

  componentDidMount() {
    this.initialProductData();
    this.initialCategroyData();
  }
  componentDidUpdate(prevProps, prevState) {}

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
      modalData,
      modalPopCheck,
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
        <Header />
        {productData.length === 0 || categoryData.length === 0 ? (
          <PageLoad />
        ) : (
          <div className="productWrap">
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
              moveToProduct={this.moveToProduct}
              getProductData={this.getProductData}
            />
            {Object.keys(modalData).length !== 0 && (
              <ProductDetailModal
                modalData={modalData}
                modalPopCheck={modalPopCheck}
                handleModal={this.handleModal}
                addCart={this.addCart}
              />
            )}
          </div>
        )}
        <Footer />
      </main>
    );
  }
}
export default withRouter(Product);

import React, { Component } from "react";
import ListItem from "./ListItem/ListItem";
import "./ProductList.scss";

class ProductList extends Component {
  render() {
    const {
      data,
      gridType,
      page,
      pageOffset,
      handlePage,
      moveToProduct,
      getProductData,
    } = this.props;
    const pageList = new Array(page).fill(0);
    const gridTypeList = [
      { type: "typeOne" },
      { type: "typeTwo" },
      { type: "typeThree" },
      { type: "typeFour" },
    ];
    return (
      <section className="product-list">
        {data.length === 0 && (
          <div className="empty-wrap">
            <strong>검색결과가 없습니다.</strong>
          </div>
        )}
        <div className="list-wrap">
          <ul className={`list-box ${gridTypeList[gridType].type}`}>
            {data.map(data => (
              <ListItem
                key={data.productId}
                data={data}
                moveToProduct={moveToProduct}
                getProductData={getProductData}
              />
            ))}
          </ul>
          <ul className="page-box">
            {pageList.map((page, index) => (
              <li
                key={index}
                className={`page-list ${index === pageOffset ? "active" : ""}`}
                onClick={e => {
                  handlePage(e, index);
                }}
              >
                <span className="page-number">{index + 1}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default ProductList;

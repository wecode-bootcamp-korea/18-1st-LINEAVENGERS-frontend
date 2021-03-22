import React, { Component } from "react";
import ListItem from "./ListItem/ListItem";
import { v4 as uuid } from "uuid";
import "./ProductList.scss";

class ProductList extends Component {
  render() {
    const { data, gridType, page, pageOffset, handlePage } = this.props;
    console.log(data);
    const pageList = new Array(page).fill(0);

    return (
      <section className="product-list">
        {data.length === 0 && (
          <div className="empty-wrap">
            <strong>검색결과가 없습니다.</strong>
          </div>
        )}
        <div className="list-wrap">
          <ul
            className={`list-box ${
              gridType === 0
                ? "typeOne"
                : gridType === 1
                ? "typeTwo"
                : gridType === 2
                ? "typeThree"
                : gridType === 3
                ? "typeFour"
                : ""
            }`}
          >
            {data.map(data => (
              <ListItem key={data.productId} data={data} />
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

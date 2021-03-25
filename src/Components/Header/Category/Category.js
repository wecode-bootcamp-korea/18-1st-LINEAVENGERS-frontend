import React, { Component } from "react";
import CategoryList from "./CategoryList/CategoryList";
import "./Category.scss";

class Category extends Component {
  constructor() {
    super();
    this.state = {
      categoryList: [],
    };
  }

  componentDidMount() {
    fetch("http://10.58.6.21:8000/product/main-category", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ categoryList: data.menuList });
      });
  }

  render() {
    return (
      <div className="category">
        <CategoryList itsCategoryList={this.state.categoryList} />
      </div>
    );
  }
}

export default Category;

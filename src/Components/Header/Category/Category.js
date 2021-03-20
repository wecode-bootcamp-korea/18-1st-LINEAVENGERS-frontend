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
    fetch("http://localhost:3000/Data/CategoryData.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ categoryList: data });
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

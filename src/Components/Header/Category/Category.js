import React, { Component } from "react";
// import { Link } from "react-router-dom";
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
    console.log(this.state.categoryList);
    return (
      <div className="category">
        <CategoryList itsCategoryList={this.state.categoryList} />
      </div>
    );
  }
}

export default Category;

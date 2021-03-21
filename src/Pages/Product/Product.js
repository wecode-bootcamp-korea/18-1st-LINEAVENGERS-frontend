import React, { Component } from "react";
import ProductDetail from "../../Components/Nav/ProductDetail/ProductDetail";

class Product extends Component {
  state = {
    data: {},
  };

  componentDidMount() {
    fetch("http://localhost:3000/data/ProductDetail.json", { method: "GET" })
      .then(res => res.json())
      .then(res => this.setState({ data: res }));
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        {Object.keys(data).length !== 0 && <ProductDetail data={data} />}
      </div>
    );
  }
}
export default Product;

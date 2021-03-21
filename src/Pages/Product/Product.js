import React, { Component } from "react";
import ProductDetail from "../../Components/ProductDetail/ProductDetail";

class Product extends Component {
  state = {
    data: {},
  };

  componentDidMount() {
    fetch("http://74f4977711e5.ngrok.io/product/detail/1", { method: "GET" })
      .then(res => res.json())
      .then(res => this.setState({ data: res.productDetail }));
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

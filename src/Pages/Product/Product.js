import React, { Component } from "react";
import ProductDetailModal from "../../Components/ProductDetailModal/ProductDetailModal";

class Product extends Component {
  state = {
    data: {},
  };

  componentDidMount() {
    fetch("http://9a81c7519d89.ngrok.io/product/modal/1", { method: "GET" })
      .then(res => res.json())
      .then(res => this.setState({ data: res.productDetail }));
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        {Object.keys(data).length !== 0 && <ProductDetailModal data={data} />}
      </div>
    );
  }
}
export default Product;

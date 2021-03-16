import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./Main.scss";

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/Data/ProductsData.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ products: data });
      });
  }

  render() {
    console.log(this.state.products);
    return (
      <div className="main">
        <Header />
        <main className="mainContainer"></main>
        <Footer />
      </div>
    );
  }
}

export default Main;

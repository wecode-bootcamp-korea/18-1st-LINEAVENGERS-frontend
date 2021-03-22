import React, { Component } from "react";
import "./Product.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

export class Product extends Component {
  constructor() {
    super();
    this.state = {
      favorite: false,
    };
  }

  handleLike = e => {
    console.log("handleLike(찜 클릭) this.state >>>", this.state);

    fetch("http://10.58.1.71:8000/mypage/favoritecreate", {
      method: "POST",
      body: JSON.stringify({
        user: 1,
        product: this.props.productId,
        favorite: this.state.favorite,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log("받은 data >>>", data);
        console.log("this.props.favorite >>>", this.props.favorite);
        this.setState({
          favorite: this.props.favorite,
        });
      });

    this.setState({
      favorite: !this.state.favorite,
    });
  };

  render() {
    console.log("render의 this.state.favorite >>>", this.state.favorite);
    console.log("render의 this.props.favorite >>>", this.props.favorite);
    return (
      <div className="productContainer">
        <div className="productImgContainer">
          <img className="productImg" src={this.props.img} alt="Product Img" />
          <div className="iconsContainer">
            <div className="heartAndShoppingBag">
              <button
                onClick={this.handleLike}
                className={this.props.favorite ? "redHeart" : "whiteHeart"}
              >
                <FontAwesomeIcon icon={faHeart} size="2x" />
              </button>
              <button className="whiteShoppingBag">
                <FontAwesomeIcon icon={faShoppingBag} size="2x" />
              </button>
            </div>
          </div>
        </div>

        <p className="price">{this.props.price}원</p>
        <p>{this.props.productName}</p>
      </div>
    );
  }
}

export default Product;

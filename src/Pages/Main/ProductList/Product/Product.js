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
    this.setState({
      favorite: !this.state.favorite,
    });

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
        this.setState({
          favorite: this.props.favorite,
        });
      });
  };

  render() {
    console.log("this.state.favorite >>>", this.state.favorite);
    console.log("this.props.favorite >>>", this.props.favorite);

    const { favorite } = this.state;
    const { img, price, productName } = this.props;
    return (
      <div className="productContainer">
        <div className="productImgContainer">
          <img className="productImg" src={img} alt="Product Img" />
          <div className="iconsContainer">
            <div className="heartAndShoppingBag">
              <button
                onClick={this.handleLike}
                className={favorite ? "redHeart" : "whiteHeart"}
              >
                <FontAwesomeIcon icon={faHeart} size="2x" />
              </button>
              <button className="whiteShoppingBag">
                <FontAwesomeIcon icon={faShoppingBag} size="2x" />
              </button>
            </div>
          </div>
        </div>

        <p className="price">{price}원</p>
        <p>{productName}</p>
      </div>
    );
  }
}

export default Product;

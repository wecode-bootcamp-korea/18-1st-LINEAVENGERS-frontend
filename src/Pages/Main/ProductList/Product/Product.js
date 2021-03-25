import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { URL } from "../../../../config";
import "./Product.scss";

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

    fetch(`${URL}/mypage/favorite`, {
      method: "POST",
      body: JSON.stringify({
        product: this.props.product,
      }),
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          favorite: this.props.favorite,
        });
      });
  };

  goBasket = e => {
    this.props.history.push("/shoppingbasket");
  };

  render() {
    const { favorite } = this.state;
    const { img, price, productName, type } = this.props;
    return (
      <div className="productContainer">
        <div className="productImgContainer">
          <Link to="/product/detail">
            <img className="productImg" src={img} alt="Product Img" />
          </Link>
          <div className="typeBox">
            {type === "NEW" ? <div className="itsNew">NEW</div> : null}
            {type === "BEST" ? <div className="itsBest">BEST</div> : null}
          </div>

          <div className="iconsContainer">
            <div className="heartAndShoppingBag">
              <button
                onClick={this.handleLike}
                className={favorite ? "redHeart" : "whiteHeart"}
              >
                <FontAwesomeIcon icon={faHeart} size="2x" />
              </button>
              <button onClick={this.goBasket} className="whiteShoppingBag">
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

export default withRouter(Product);

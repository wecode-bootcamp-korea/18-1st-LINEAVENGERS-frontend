import React, { Component } from "react";
import Content from "./Content/Content";
import ProductList from "./ProductList/ProductList";
import "./Product.scss";

export class Product extends Component {
  render() {
    return (
      <main className="product">
        <div className="product-container">
          <Content />
          <ProductList data={data} />
        </div>
      </main>
    );
  }
}

const data = [
  {
    id: 0,
    imgUrl:
      "https://wi.wallpapertip.com/wsimgs/96-966529_line-friends-character-wallpaper-line-friends.jpg",
    type: "best",
    name: "라인 어벤져스",
    price: {
      normal: 3600,
      sale: 10,
    },
    review: 1,
    grade: 5,
    date: "2021-10-23",
    like: true,
  },
  {
    id: 1,
    imgUrl:
      "https://lh3.googleusercontent.com/proxy/5xo06Ze80-sTNcnuucU0Ou4SQSvrx9LjbcXIqwaWw4e-68dHusN_ln0LJiaF_iDtljWGohbvQRYXsjWz3U7bL_51XBn1lA4FIxCnNMd-LjzEJQdoahaK3WE6jQ3_XnDr7WigiVERNr_U42Mj-tozf_zirVnO01um7t_k5OEe8aqtbaE626mFTwOmtB1o8DEaMQDwdxXRl_deUqUSo3ZKRDlVzreYDu_W4rVFCEqHbyktl0JIUab_EbWBOONONbJgMOSuqXviTHpAkThJjHm3VXN7NfoW6txJ1AlxHLYtH6T7XIy_UmyKwkvVvdJHqkhRxsReO4suSzfUzm9ny98oabYF6HfUYS3pxMUpTxWiOy_pg4xT-vm6pgm8WinlFDMssYMVdVZv4KD3l3BYd8UFaVAz3tE302ChQen2S59wXzNOMPLBV5rcM3wmJoRbYsJ__QJL4ofTqK-JEVJzjA",
    type: "new",
    name: "라인 아이언맨",
    price: {
      normal: 5000,
      sale: 30,
    },
    review: 10,
    grade: 4.5,
    date: "2021-09-11",
    like: false,
  },
  {
    id: 2,
    imgUrl: "https://image.zdnet.co.kr/2016/03/25/hjan_6ar7l9JxKYh1cJG.jpg",
    type: "normal",
    name: "라인 캡틴 아메리카",
    price: {
      normal: 3600,
      sale: null,
    },
    review: 40,
    grade: 4.3,
    date: "2021-09-15",
    like: true,
  },
];
export default Product;

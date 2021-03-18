import React, { Component } from "react";
import ProductDetail from "../../Components/Nav/ProductDetail/ProductDetail";

class Product extends Component {
  render() {
    return (
      <div>
        <ProductDetail data={data} />
      </div>
    );
  }
}
const data = {
  name: "라인프렌즈 브라운 머그컵",
  price: 15000,
  type: "사이즈",
  options: ["단품"],
  imgUrls: [
    "https://cdn.econovill.com/news/snsPhoto/202011/503769_404206_563.jpg",
    "https://lh3.googleusercontent.com/proxy/AXP-_3_ekPl2yVw_qgtpJUhX2auLHDUrz5ndLw3CzYpiiogECL16GNFHBRA1XmoscCYkbiIrTngHZ3TxMpCPk9l0k1GkviqgPDaY5uXK9zGDGkOikWRghKceifzkgPBOxj660g",
    "https://i.pinimg.com/originals/7e/a8/39/7ea839dfdfb3c0b565b03f3bb9f5a697.jpg",
  ],
  reviews: [
    {
      user: "test",
      grade: 3,
      date: "21.03.16",
      type: "사이즈",
      option: "단품",
      comment: "테스트 입니다.!",
      imgUrl:
        "https://cdn.econovill.com/news/snsPhoto/202011/503769_404206_563.jpg",
    },
    {
      user: "test",
      grade: 5,
      date: "21.03.16",
      type: "사이즈",
      option: "단품",
      comment: "테스트 입니다.!",
      imgUrl:
        "https://cdn.econovill.com/news/snsPhoto/202011/503769_404206_563.jpg",
    },
    {
      user: "test",
      grade: 5,
      date: "21.03.16",
      type: "사이즈",
      option: "단품",
      comment: "테스트 입니다.!",
      imgUrl:
        "https://cdn.econovill.com/news/snsPhoto/202011/503769_404206_563.jpg",
    },
    {
      user: "test",
      grade: 5,
      date: "21.03.16",
      type: "사이즈",
      option: "단품",
      comment: "테스트 입니다.!",
      imgUrl:
        "https://cdn.econovill.com/news/snsPhoto/202011/503769_404206_563.jpg",
    },
  ],
};
export default Product;

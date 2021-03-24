import React from "react";
import MyPageNav from "./MyPageNav";
import MyPageAside from "./MyPageAside";
import MyPageNone from "./MyPageNone";
import MyPageHeartProduct from "./MyPageHeartProduct";
import "./MyPage.scss";

class MyPageHeart extends React.Component {
  constructor() {
    super();
    this.state = {
      productList: [],
    };
  }

  componentDidMount() {
    fetch("http://10.58.1.71:8000/mypage/favorite", {
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.uRvhx0YRxMc6bT8xlDbEw3lNaEpuPH0B1OShVoJGahw",
      },
    })
      .then(res => res.json())
      .then(res => this.setState({ productList: res }));
  }

  render() {
    console.log(this.state.productList);
    return (
      <div className="myPage">
        <MyPageNav />
        <main className="myPageMain">
          <MyPageAside username={this.state.productList.user_name} />
          {this.state.productList.length === 0 ? (
            <MyPageNone />
          ) : (
            <article className="myPageProduct">
              <div className="myPageHeartNav">
                <div className="myPageHeartNavLeft">
                  <div className="myPageHeartNavLeftL">찜한 상품</div>
                  <div className="myPageHeartNavLeftR">
                    최근 1년간의 찜한 상품이 제공됩니다.
                  </div>
                </div>
                <div className="myPageHeartNavRight">
                  <div className="myPageHeartNavRightL">쇼핑 MY</div>
                  <div className="myPageHeartNavRightM">&gt; 관심 상품</div>
                  <div className="myPageHeartNavRightR">&gt; 찜한 상품</div>
                </div>
              </div>
              {this.state.productList.map(product => {
                return this.state.productList.length === 0 ? (
                  <MyPageNone />
                ) : (
                  <MyPageHeartProduct
                    image={product.image}
                    name={product.name}
                    price={product.price}
                  />
                );
              })}
            </article>
          )}
        </main>
      </div>
    );
  }
}

export default MyPageHeart;

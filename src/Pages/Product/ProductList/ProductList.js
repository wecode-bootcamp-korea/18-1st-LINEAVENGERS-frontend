import React, { Component } from "react";
import ListItem from "./ListItem/ListItem";
import { v4 as uuid } from "uuid";
import "./ProductList.scss";

class ProductList extends Component {
  render() {
    const { data } = this.props;
    return (
      <section className="product-list">
        {!data && (
          <div className="empty-wrap">
            <strong>검색결과가 없습니다.</strong>
          </div>
        )}
        <div className="list-wrap">
          <ul className="list-box">
            {data.map(data => (
              <ListItem key={uuid()} data={data} />
            ))}
            {/* <li className="list-item">
              <div className="item-img new">
                <img
                  src="https://wi.wallpapertip.com/wsimgs/96-966529_line-friends-character-wallpaper-line-friends.jpg"
                  alt="상품 이미지"
                />
                <div className="item-choice">
                  <FontAwesomeIcon className="choice-like" icon={faHeart} />
                  <FontAwesomeIcon className="chocie-detail" icon={faPlus} />
                </div>
              </div>
              <div className="item-title">
                <p class="title-name">라인 어벤져스</p>
                <button class="title-heart">
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>
              <div className="item-price">
                <span className="final-price">3,600원</span>
                <span className="before-price"></span>
                <span className="sale-percent"></span>
              </div>
              <div className="item-data">
                <span className="data-review">
                  리뷰 <em>1</em>
                </span>
                <span className="data-grade">
                  평점 <em>5.0</em>/<em>5</em>
                </span>
              </div>
            </li>
            <li className="list-item">
              <div className="item-img">
                <img
                  src="https://wi.wallpapertip.com/wsimgs/96-966529_line-friends-character-wallpaper-line-friends.jpg"
                  alt="상품 이미지"
                />
                <div className="item-choice">
                  <FontAwesomeIcon className="choice-like" icon={faHeart} />
                  <FontAwesomeIcon className="chocie-detail" icon={faPlus} />
                </div>
              </div>
              <div className="item-title">
                <p class="title-name">라인 어벤져스</p>
                <button class="title-heart">
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>
              <div className="item-price">
                <span className="final-price">3,600원</span>
                <span className="before-price">4,000원</span>
                <span className="sale-percent">10%</span>
              </div>
              <div className="item-data">
                <span className="data-review">
                  리뷰 <em>1</em>
                </span>
                <span className="data-grade">
                  평점 <em>5.0</em>/<em>5</em>
                </span>
              </div>
            </li>
            <li className="list-item">
              <div className="item-img">
                <img
                  src="https://wi.wallpapertip.com/wsimgs/96-966529_line-friends-character-wallpaper-line-friends.jpg"
                  alt="상품 이미지"
                />
                <div className="item-choice">
                  <FontAwesomeIcon className="choice-like" icon={faHeart} />
                  <FontAwesomeIcon className="chocie-detail" icon={faPlus} />
                </div>
              </div>
              <div className="item-title">
                <p class="title-name">
                  라인 어벤져스 라인 어벤져스 라인 어벤져스 라인 어벤져스 라인
                  어벤져스
                </p>
                <button class="title-heart">
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>
              <div className="item-price">
                <span className="final-price">3,600원</span>
                <span className="before-price"></span>
                <span className="sale-percent"></span>
              </div>
              <div className="item-data">
                <span className="data-review">
                  리뷰 <em>1</em>
                </span>
                <span className="data-grade">
                  평점 <em>5.0</em>/<em>5</em>
                </span>
              </div>
            </li>
            <li className="list-item">
              <div className="item-img">
                <img
                  src="https://wi.wallpapertip.com/wsimgs/96-966529_line-friends-character-wallpaper-line-friends.jpg"
                  alt="상품 이미지"
                />
                <div className="item-choice">
                  <FontAwesomeIcon className="choice-like" icon={faHeart} />
                  <FontAwesomeIcon className="chocie-detail" icon={faPlus} />
                </div>
              </div>
              <div className="item-title">
                <p class="title-name">라인 어벤져스</p>
                <button class="title-heart">
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>
              <div className="item-price">4,000원</div>
              <div className="item-data">
                <span className="data-review">
                  리뷰 <em>1</em>
                </span>
                <span className="data-grade">
                  평점 <em>5.0</em>/<em>5</em>
                </span>
              </div>
            </li> */}
          </ul>
          <ul className="page-box">
            <li className="page-list active">
              <span className="page-number">1</span>
            </li>
            <li className="page-list">
              <span className="page-number">2</span>
            </li>
            <li className="page-list">
              <span className="page-number">3</span>
            </li>
            <li className="page-list">
              <span className="page-number">4</span>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default ProductList;

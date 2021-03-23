import React, { Component } from "react";
import Pay from "./Pay/Pay";
import Preview from "./Preview/Preview";
import Review from "./Review/Review";
import DetailContainer from "./DetailContainer/DetailContainer";
import ReviewContainer from "./ReviewContainer/ReviewContainer";
import QAContainer from "./QAContainer/QAContainer";
import "./ProductDetail.scss";

class ProductDetail extends Component {
  render() {
    return (
      <div className="productDetailWrap">
        <section className="contentTop">
          <div className="previewPay">
            <Preview />
            <Pay />
          </div>
          <Review />
        </section>
        <DetailContainer />
        <ReviewContainer />
        <QAContainer />
        <section className="refundContainer">
          <h1>반품/교환정보</h1>
          <table>
            <tr>
              <th colSpan="4">
                <strong>라인 어벤져스 반품/교환 안내</strong>
                <br />
                반품 시 먼저 판매자와 연락하셔서 반품사유, 택배사, 배송비,
                반품지 주소 등을 협의하신 후 반품상품을 발송해 주시기 바랍니다.
              </th>
            </tr>
            <tr>
              <td width="160">판매 지정택배사</td>
              <td colSpan="3">CJ대한통운</td>
            </tr>
            <tr>
              <td>반품배송비</td>
              <td>편도 3,000원 (최초 배송비 무료인 경우 6,000원 부과)</td>
              <td style={{ background: "#fafafa" }}>교환배송비</td>
              <td width="300">6,000원</td>
            </tr>
            <tr>
              <td>보내실 곳</td>
              <td colSpan="3">서울특별시 강남구 삼성동 테헤란로 427</td>
            </tr>
            <tr>
              <td>반품/교환 사유에 따른 요청 가능 기간</td>
              <td colSpan="3">구매자 단순 변심은 상품 수령 후 7일 이내</td>
            </tr>
            <tr>
              <td></td>
              <td colSpan="3">
                표시/광고와 상이, 상품하자의 경우 상품 수령 후 3개월 이내 혹은
                표시/광고와 다른 사실을 안 날로부터 30일 이내
              </td>
            </tr>
            <tr>
              <td>반품/교환 불가능 사유</td>
              <td colSpan="3">
                <ul>
                  <li>1. 반품요청기간이 지난 경우</li>
                  <li>
                    2. 구매자의 책임 있는 사유로 상품 등이 멸실 또는 훼손된 경우
                  </li>
                  <li>
                    3. 구매자의 책임있는 사유로 포장이 훼손되어 상품 가치가
                    현저히 상실된 경우
                  </li>
                  <li>
                    4. 구매자의 사용 또는 일부 소비에 의하여 상품의 가치가
                    현저히 감소한 경우
                  </li>
                  <li>
                    5. 시간의 경과에 의하여 재판매가 곤란할 정도로 상품 등의
                    가치가 현저히 감소한 경우
                  </li>
                  <li>
                    6. 고객의 요청사항에 맞춰 제작에 들어가는 맞춤제작상품의
                    경우
                  </li>
                  <li>7. 복제가 가능한 상품 등의 포장을 훼손한 경우</li>
                </ul>
              </td>
            </tr>
          </table>
        </section>
      </div>
    );
  }
}

export default ProductDetail;

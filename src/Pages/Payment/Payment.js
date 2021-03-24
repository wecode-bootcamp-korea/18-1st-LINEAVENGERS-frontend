import React, { Component } from "react";
import DaumPostCode from "react-daum-postcode";
import { RiArrowRightSLine } from "react-icons/ri";
import { FiScissors } from "react-icons/fi";
import { RiErrorWarningLine } from "react-icons/ri";
import "./Payment.scss";
export class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      zoneCode: "",
      fullAddress: "",
      isDaumPost: false,
      isRegister: false,
      register: [],
    };
  }
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleOpenPost = () => {
    this.setState({
      isDaumPost: true,
    });
  };

  //postcode
  handleAddress = data => {
    let allAddress = data.address;
    let extraAddress = "";
    let zoneCodes = data.zonecode;

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      allAddress += extraAddress !== "" ? `(${extraAddress})` : "";
    }
    this.setState({
      fullAddress: allAddress,
      zoneCode: zoneCodes,
    });
  };

  render() {
    const { isDaumPost, fullAddress, zoneCode } = this.state;
    // DaumPostCode style
    const width = 595;
    const height = 450;
    //스타일 속성
    const modalStyle = {
      position: "absolute",
      top: 0,
      left: "-178px",
      zIndex: "100",
      border: "1px solid #000000",
      overflow: "hidden",
    };
    return (
      <div className="payMent">
        {/* <header className="header">header</header> */}
        <section className="container">
          <div className="orderHeader">
            <h3 className="orderPayment">
              <span className="blind">주문/결제</span>
            </h3>
            <div className="rightProcess">
              <ol className="process">
                <li className="pro">장바구니</li>
                <span className="rowIcon">
                  <RiArrowRightSLine />
                </span>
                <li className="pro2">주문/결제</li>
                <span className="rowIcon">
                  <RiArrowRightSLine />
                </span>
                <li className="pro">완료</li>
              </ol>
            </div>
          </div>
        </section>

        <div className="orderContent">
          <div className="product">
            <div className="productHeader">
              <div className="InfoMenu">
                <div className="shopMenu">
                  <ul>
                    <div>
                      <li className="info">상품정보</li>
                    </div>
                    <div className="shopInfo">
                      <li className="seller">판매자</li>
                      <li className="shipping">배송비</li>
                      <li className="quantity">수량</li>
                      <li className="sale">할인</li>
                      <li className="goods">상품금액(할인포함)</li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            <section className="LineInfo">
              <img></img>
              <div className="namesInfo">
                <span class="predictStatus">3/26(금) 도착 확률 83%</span>
                <ul>
                  <li className="nameInfo">[스마트스토어] 라인프렌즈</li>
                  <li className="centerInfo">
                    라인프렌즈 브롤스타즈 홀파이크 가방&문구 에디션
                  </li>
                  <li className="nameInfo">사이즈: 단품/1개</li>
                </ul>
                <ul className="userInfoName">
                  <div className="infoBox">
                    <li className="userSell">라인프렌즈</li>
                    <li className="userFree">무료</li>
                    <li className="userQuan">1개</li>
                    <li className="userSale">(-) 42,400원</li>
                    <li className="usergoods">63,600원</li>
                  </div>
                </ul>
              </div>
            </section>
          </div>

          <span className="fiScissors">
            <FiScissors />
          </span>
          <section>
            <div className=""></div>
          </section>
          <section>
            <div className="ShoppingBox">
              <div className="ShoppingInner">
                <span className="infoInner">배송지 정보</span>
                <div className="destiNation">
                  <div className="shoppBtnbox">
                    <button>배송지 목록</button>
                  </div>
                  <sapn className="shoppSelect">배송지 선택</sapn>
                  <sapn className="newSelect">신규 배송지</sapn>
                  <span className="shoppRecipient">
                    수령인
                    <input type="text" placeholder="10자 이내로 입력하세요" />
                  </span>
                  <span className="shoppPlacename">
                    배송지명
                    <input
                      type="text"
                      placeholder="직접 입력하거나 선택하세요"
                      className="selectInput"
                    />
                  </span>
                  <span className="shoppContact">
                    연락처
                    <div className="numInputBox">
                      <input type="text" className="numBox" /> -
                      <input type="text" className="numBox" /> -
                      <input type="text" className="numBox" />
                    </div>
                  </span>

                  <div className="modalRow">
                    <div className="modalCell cellTit">
                      <div>
                        <span className="bsAdress">
                          <b>배송지 주소</b>
                        </span>
                      </div>
                    </div>
                    <div className="modalCell">
                      <div className="cellFirst">
                        <div className="zipCode">
                          <div>
                            <input value={zoneCode} type="text" />
                          </div>
                        </div>
                        <button type="button" onClick={this.handleOpenPost}>
                          <span>우편번호 찾기</span>
                        </button>
                      </div>
                      {isDaumPost ? (
                        <DaumPostCode
                          onComplete={this.handleAddress}
                          autoClose
                          width={width}
                          height={height}
                          style={modalStyle}
                          isDaumPost={isDaumPost}
                        />
                      ) : null}
                      <div className="address"></div>
                      <div className="addressBox">
                        <input
                          className="isDetail"
                          type="text"
                          onChange={this.handleChange}
                          name="address"
                          value={fullAddress}
                          onChange={this.handleInput}
                        />
                      </div>
                    </div>
                  </div>

                  <p class="extraInfo">
                    <span className="warningIcon">
                      <RiErrorWarningLine />
                    </span>
                    <span class="ico_ext"></span>도서산간 지역의 경우 추후 수령
                    시 추가 배송비가 과금될 수 있습니다.
                  </p>
                </div>
                <div className="rightUserInfo">
                  <div className="userInfo">
                    <span className="userName">주문자 정보</span>
                  </div>

                  <div className="myName">
                    <span>배담호</span>
                  </div>
                  <span className="myNumber">
                    010-5**2-6**4
                    <button>수정</button>
                  </span>

                  <span className="myEmail">
                    dam*****@na***.com
                    <button>수정</button>
                  </span>
                </div>
              </div>
              <div className="ShopRightBox"> </div>
            </div>

            <div className="pointBox">
              <div className="pointInner">
                <div className="npointBox">
                  <div className="rightDetail">
                    <span className="payDetail">결제상세</span>
                    <p className="isPay">주문금액</p>
                    <p className="isGoods">상품금액</p>
                    <p className="isShipping">배송비</p>

                    <div className="rightLine"></div>
                    <p className="lastPayment">결제금액</p>
                    <div className="payPay">
                      <div className="payOrder">60,300원</div>
                      <div className="payGoods">63,600원</div>
                      <div className="payShipping">0원</div>
                      <div className="payLast">60,600원</div>
                    </div>
                  </div>
                  <span class="userPoint"> 포인트</span>
                </div>
                <div className="userPayment">
                  <sapn class="nPaypoint">N페이 포인트 결제</sapn>
                </div>
                <div className="centerMent">
                  <sapn class="nPoint">보유</sapn>
                  <div className="borderLine"></div>

                  <sapn class="nPoint">
                    사용
                    <button className="fullUse">전액사용</button>
                  </sapn>
                  <div className="borderLine"></div>

                  <div className="userTranspform">
                    <sapn class="xPoint">
                      제유 포인트
                      <button className="userTrans">전환하기</button>
                    </sapn>
                    <div className="borderLine"></div>
                  </div>
                </div>
              </div>
              <div className="pointRightBox"></div>
            </div>
          </section>
          <section>
            <span className="fiScissors">
              <FiScissors />
            </span>
            <div className="pointAccumulateBox">
              <button className="pointAccumulate">결제하기</button>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Payment;

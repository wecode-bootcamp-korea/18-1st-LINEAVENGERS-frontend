import React, { Component } from "react";
import "./PageLoad.scss";

class PageLoad extends Component {
  render() {
    return (
      <div className="loadContainer">
        <img className="logo" src="/Images/Logo/black.png" alt="로고" />
        <div className="loadBox">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }
}

export default PageLoad;

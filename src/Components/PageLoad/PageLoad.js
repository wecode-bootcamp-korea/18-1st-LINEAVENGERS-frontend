import React, { Component } from "react";
import "./PageLoad.scss";

class PageLoad extends Component {
  render() {
    return (
      <div className="loadContainer">
        <img
          className="logo"
          src="https://yt3.ggpht.com/ytc/AAUvwnjVI49Y8nWzHXy8a7gWdr9xI3m8aebMXAmbk1XK=s900-c-k-c0x00ffffff-no-rj"
          alt="로고"
        />
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

import React from "react";
import "../css/style.css";
import "../css/responsive.css";
import Headers from "./header";
import Footer from "./footer";
const MainFunction = () => {
  return(
      <main className="main-layout inner_page">
      <Headers/>
      {/*<!-- end banner -->*/}
      <div className="back_re">
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <div className="title">
                          <h2>主要功能~</h2>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/*<!-- our classes -->*/}
      <div className="classes">
          <div className="container">
              <div className="row">
                  <div className="col-sm-12">
                      <div className="titlepage">

                     <span>我們的網站有「四個」主要的功能<br/>點擊圖片可以觀看範例!
                     </span>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-4 col-sm-6 d_none">
                  </div>
                  <div className="col-md-4 col-sm-6 margin_bott">
                      <div className="our_yoga">
                          <figure><img src={require("../components/images/analyze.png")} alt="#"/></figure>
                          <h3>狀況分析</h3>
                          <span>這一切的起點!</span>
                      </div>
                  </div>
                  <div className="col-md-4 col-sm-6 d_none">
                  </div>
                  <div className="col-md-4 col-sm-6">
                      <div className="our_yoga">
                          <figure><img src={require("../components/images/speak.png")} alt="#"/></figure>
                          <h3>聊天機器人</h3>
                          <span>與機器人聊天何嘗不是一種樂趣?</span>
                      </div>
                  </div>
                  <div className="col-md-4 col-sm-6 d_none">
                  </div>
                  <div className="col-md-4 col-sm-6">
                      <div className="our_yoga">
                          <figure><img src={require("../components/images/block.png")} alt="#"/></figure>
                          <h3>各式小遊戲</h3>
                          <span>小遊戲，趣味多。</span>
                      </div>
                  </div>
                  <div className="col-md-4 offset-md-4 col-sm-6  margin_top">
                      <div className="our_yoga">
                          <figure><img src={require("../components/images/opportunity.png")} alt="#"/></figure>
                          <h3>結果判斷</h3>
                          <span>可以依照上次結果進行對比!(如果有的話)</span>
                          <a className="read_more yoga_btn" href="Javascript:void(0)"> 閱讀更多</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/*<!-- end our classes -->*/}

      {/*<!--  footer -->*/}
      <Footer/>
      {/*<!-- end footer -->*/}
     
  </main>
  )
}

export default MainFunction;
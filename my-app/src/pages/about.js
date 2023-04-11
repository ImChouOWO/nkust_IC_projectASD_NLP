import React from "react";
import "../css/style.css";
import "../css/responsive.css";
import Headers from "./header";
import Footer from "./footer";
const About = () => {
  return(
      <main className="main-layout inner_page">
      <Headers/>
      <div className="back_re">
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <div className="title">
                          <h2>關於我們</h2>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/* <!-- about --> */}
      <div className="about">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-md-6 offset-md-3">
                      <div className="titlepage">
                          <span><strong>我們是一個學生團隊，希望能透過我們所做出的網站來幫助自閉症患者</strong></span>
                      </div>
                  </div>
                  <div className="col-md-12">
                      <div className="about_img">
                          <figure><img src={require("../components/images/pngegg.png")} alt="#"/></figure>
                          <a className="read_more yoga_btn" href="Javascript:void(0)"> 閱讀更多</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/* <!-- end about --> */}

      {/* <!--  footer --> */}
      <Footer/>
  </main>
  )
}
export default About;
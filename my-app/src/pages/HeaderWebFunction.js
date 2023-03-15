import React from "react";
import "../css/bootstrap.min.css";
import "../css/style.css";
import "../css/responsive.css";
import "../css/jquery.mCustomScrollbar.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import Headers from "./header";
import Footer from "./footer";
const HeaderWebFunction = () => {
    return(
        <main className="main-layout inner_page">
        {/*<!-- loader  -->*/}
        {/*<div className="loader_bg">*/}
        {/*    <div className="loader"><img src={require("../components/images/blue.gif")} alt="#"/></div>*/}
        {/*</div>*/}
        {/*<!-- end loader -->*/}
        {/*<!-- header -->*/}
        <Headers/>

        {/*<!-- end banner -->*/}

        <div className="back_re">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="title">
                            <h2>自閉症</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*<!-- balance -->*/}
        <div className="balance">
            <div className="container-fluid">
                <div className="row d_flex">
                    <div className="col-md-5 padding_left0">
                        <div className="yoga_img">
                            <figure><img src={require("../components/images/22.jpg")} alt="#"/></figure>
                        </div>
                    </div>
                    <div className="col-md-6 offset-md-1">
                        <div className="titlepage">
                            <h2 className="padd_top30">Mind in Balance</h2>
                            <p> 在遺傳學方面，自閉症研究比幾年前要復雜得許多。科學家們已經確定了幾十個似乎是重要參與者的基因，並且正在追踪這些基因的行為。
                                但隨著科技日新月異，一個問題出現：究竟怎麼確定 ，到底什麼是自閉症？
                            </p>
                            <p>
                                "我們認為現在自閉症的範圍相當廣泛."<br/>Bonita Klein-Tasman, 威斯康星大學密爾沃基分校的心理學教授.
                            </p>
                            <a className="read_more ye_b5n " href="Javascript:void(0)"> 閱讀更多</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*<!-- end balance -->*/}

        {/*<!--  footer -->*/}
        <Footer/>
        {/*<!-- end footer -->*/}
        {/*<!-- Javascript files-->*/}
        <script src="../js/jquery.min.js"></script>
        <script src="../js/bootstrap.bundle.min.js"></script>
        <script src="../js/jquery-3.0.0.min.js"></script>
        {/*<!-- sidebar -->*/}
        <script src="../js/jquery.mCustomScrollbar.concat.min.js"></script>
        <script src="../js/custom.js"></script>
        </main>
    )
}
export default HeaderWebFunction
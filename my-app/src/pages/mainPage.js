import React from "react";
import "../css/bootstrap.min.css";
import "../css/style.css";
import "../css/responsive.css";
import "../css/jquery.mCustomScrollbar.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import Headers from "./header";
import Footer from "./footer";
const MainPage = () => {
    return (
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
                            <h2>Pricing</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*<!-- pricing -->*/}
        <div className="pricing_main">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="titlepage">

                            <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy </span>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="pricing">
                            <h4>STARTER PLAN</h4>
                            <h3><span>$</span>60</h3>
                            <p>Unlimited access to content Fully Secure online backup One Year round the clock support
                                FREE complimentary lanyard</p>
                            <a className="read_more dark_bg" href="Javascript:void(0)"> Starte Now</a>
                        </div>
                    </div>
                    <div className="col-md-4 ho_bor">
                        <div className="pricing ">
                            <h4>STARTER PLAN</h4>
                            <h3><span>$</span>60</h3>
                            <p>Unlimited access to content Fully Secure online backup One Year round the clock support
                                FREE complimentary lanyard</p>
                            <a className="read_more dark_bg" href="Javascript:void(0)"> Starte Now</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="pricing">
                            <h4>STARTER PLAN</h4>
                            <h3><span>$</span>60</h3>
                            <p>Unlimited access to content Fully Secure online backup One Year round the clock support
                                FREE complimentary lanyard</p>
                            <a className="read_more dark_bg" href="Javascript:void(0)"> Starte Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*<!-- end pricing -->*/}

        {/*<!-- container -->*/}
        
        <div className="classes">
          <div className="container">
              <div className="row">
                  <div className="col-sm-12">
                      <div className="titlepage">
                          <h2>Our Classes</h2>
                          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                     </span>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-4 col-sm-6 d_none">
                  </div>
                  <div className="col-md-4 col-sm-6 margin_bott">
                      <div className="our_yoga">
                          <figure><img src={require("../components/images/our_yoga1.png")} alt="#"/></figure>
                          <h3>HATHA YOGA</h3>
                          <span>Lorem ipsum dolor sit amet</span>
                      </div>
                  </div>
                  <div className="col-md-4 col-sm-6 d_none">
                  </div>
                  <div className="col-md-4 col-sm-6">
                      <div className="our_yoga">
                          <figure><img src={require("../components/images/our_yoga2.png")} alt="#"/></figure>
                          <h3>HATHA YOGA</h3>
                          <span>Lorem ipsum dolor sit amet</span>
                      </div>
                  </div>
                  <div className="col-md-4 col-sm-6 d_none">
                  </div>
                  <div className="col-md-4 col-sm-6">
                      <div className="our_yoga">
                          <figure><img src={require("../components/images/our_yoga3.png")} alt="#"/></figure>
                          <h3>HATHA YOGA</h3>
                          <span>Lorem ipsum dolor sit amet</span>
                      </div>
                  </div>
                  <div className="col-md-4 offset-md-4 col-sm-6  margin_top">
                      <div className="our_yoga">
                          <figure><img src={require("../components/images/our_yoga4.png")} alt="#"/></figure>
                          <h3>HATHA YOGA</h3>
                          <span>Lorem ipsum dolor sit amet</span>
                          {/*<a className="read_more yoga_btn" href="Javascript:void(0)"> Read More</a>*/}
                      </div>
                  </div>
              </div>
          </div>
      </div>
        {/*<!-- end container -->*/}
        {/* wat says people */}
        <div className="pepole">
         <div className="container">
             <div className="row">
                 <div className="col-md-12">
                     <div className="titlepage">
                         <h2>What Says Pepole</h2>
                         <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy </span>
                     </div>
                 </div>
             </div>
             <div className="row">
                 <div className="col-md-8 offset-md-2">
                     <div className="testimo_ban_bg">
                         <div id="testimo" className="carousel slide testimo_ban" data-ride="carousel">
                             <ol className="carousel-indicators">
                                 <li data-target="#testimo" data-slide-to="0" className="active"></li>
                                 <li data-target="#testimo" data-slide-to="1"></li>
                                 <li data-target="#testimo" data-slide-to="2"></li>
                             </ol>
                             <div className="carousel-inner">
                                 <div className="carousel-item active">
                                     <div className="container parile0">
                                         <div className="carousel-caption relative2">
                                             <div className="row d_flex">
                                                 <div className="col-md-12">
                                                     <i><img className="qusright" src={require("../components/images/t.png")} alt="#"/><img
                                                        src={require("../components/images/tes.png")} alt="#"/><img className="qusleft"
                                                                                            src={require("../components/images/t.png")}
                                                                                             alt="#"/></i>
                                                     <div className="aliq">
                                                         <span>Aliqua</span>
                                                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                             sed do eiusmod tempor incididunt ut labore et dolore magna
                                                             aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet,
                                                             consectetur adipiscing elit, sed do eiusmod tempor
                                                             incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                             minim veniam</p>
                                                     </div>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                                 <div className="carousel-item">
                                     <div className="container parile0">
                                         <div className="carousel-caption relative2">
                                             <div className="row d_flex">
                                                 <div className="col-md-12">
                                                     <i><img className="qusright" src={require("../components/images/t.png")} alt="#"/><img
                                                          src={require("../components/images/tes.png")} alt="#"/><img className="qusleft"
                                                                                             src={require("../components/images/t.png")}
                                                                                            alt="#"/></i>
                                                     <div className="aliq">
                                                         <span>Aliqua</span>
                                                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                             sed do eiusmod tempor incididunt ut labore et dolore magna
                                                             aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet,
                                                             consectetur adipiscing elit, sed do eiusmod tempor
                                                             incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                             minim veniam</p>
                                                     </div>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                                 <div className="carousel-item">
                                     <div className="container parile0">
                                         <div className="carousel-caption relative2">
                                             <div className="row d_flex">
                                                 <div className="col-md-12">
                                                     <i><img className="qusright" src={require("../components/images/t.png")} alt="#"/><img
                                                         src={require("../components/images/tes.png")} alt="#"/><img className="qusleft"
                                                                                            src={require("../components/images/t.png")}
                                                                                            alt="#"/></i>
                                                     <div className="aliq">
                                                         <span>Aliqua</span>
                                                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                             sed do eiusmod tempor incididunt ut labore et dolore magna
                                                             aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet,
                                                             consectetur adipiscing elit, sed do eiusmod tempor
                                                             incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                             minim veniam</p>
                                                     </div>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                                 <a className="carousel-control-prev" id="#testimo" role="button" data-slide="prev">
                                     <i className="fa fa-arrow-left" aria-hidden="true"></i>
                                     <span className="sr-only">Previous</span>
                                 </a>
                                 <a className="carousel-control-next" id="#testimo" role="button" data-slide="next">
                                     <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                     <span className="sr-only">Next</span>
                                 </a>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
      </div>
        {/* end what says people  */}
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
export default MainPage
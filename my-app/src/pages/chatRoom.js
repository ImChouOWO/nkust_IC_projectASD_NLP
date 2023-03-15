import React from "react";
import io from 'socket.io-client';
import "../css/bootstrap.min.css";
import "../css/style.css";
import "../css/responsive.css";
import "../css/jquery.mCustomScrollbar.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "./footer";
import Headers from "./header";
import Test from "./components/test";

const ChatRoom = () => {
  return(
      <main className="main-layout inner_page">
      <Headers/>
      <div className="back_re">
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <div className="title">
                          <h2></h2>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="pepole">
         <div className="container">
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
                                                     <i><img src={require("../components/images/tes.png")} alt="#"/></i>
                                                     <Test/>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
      </div>
      {/* <!-- footer --> */}
      <Footer/>
      {/* <!-- end footer --> */}
      {/* <!-- Javascript files--> */}
      <script src="../js/jquery.min.js"></script>
      <script src="../js/bootstrap.bundle"></script>
      <script src="../js/jquery-3.0.0.min.js"></script>
      {/* <!-- sidebar --> */}
      <script src="../js/jquery.mCustomScrollbar.concat.min.js"></script>
      <script src="../js/custom.js"></script>
  </main>
  )
}
export default ChatRoom;
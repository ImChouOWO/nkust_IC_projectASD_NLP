import React from "react";
import "../css/bootstrap.min.css";
import "../css/style.css";
import "../css/responsive.css";
import "../css/jquery.mCustomScrollbar.min.css";
import 'bootstrap/dist/css/bootstrap.css';
const Footer = () => {
   
  return(
    

    <footer>
    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h3>快速抵達</h3>
                    <ul className="link_menu">
                        <li><a href="#">首頁</a></li>
                        <li><a href="">流程</a></li>
                        <li><a href="">網站功能</a></li>
                    </ul>
                </div>
                <div className=" col-md-3">
                    <h3>待放</h3>
                    <p className="many">

                    </p>
                </div>
                <div className="col-lg-3 offset-mdlg-2     col-md-4 offset-md-1">
                    <h3>聯絡我們 </h3>
                    <ul className="conta">
                        <li><i className="fa fa-envelope" aria-hidden="true"></i><a href="#"> C109156139@nkust.edu.tw</a>
                        </li>
                        <li><i className="fa fa-mobile" aria-hidden="true"></i> Call : +01 1234567890</li>
                    </ul>
                    {/*<ul className="social_icon">*/}
                    {/*    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>*/}
                    {/*    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>*/}
                    {/*    <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>*/}
                    {/*    <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>*/}
                    {/*</ul>*/}
                </div>
            </div>
        </div>
        <div className="copyright">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <p>© 2019 All Rights Reserved. Design by <a href="https://html.design/"> Free Html
                            Templates</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>  
  )
}
export default Footer;
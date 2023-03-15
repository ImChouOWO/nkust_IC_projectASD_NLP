import React from "react";
import "../css/bootstrap.min.css";
import "../css/style.css";
import "../css/responsive.css";
import "../css/jquery.mCustomScrollbar.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import Headers from "./header";


const NotFound = () => {
  return(
      <main className="main-layout inner_page">
      <Headers/>
      <div className="back_re">
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <div className="title">
                          <h2>Error 404 NotFound</h2>
                      </div>
                  </div>
              </div>
          </div>
      </div>
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
export default NotFound;
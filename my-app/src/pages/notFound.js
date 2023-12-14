import React from "react";
import "../css/style.css";
import "../css/responsive.css";
import Footer from "./ver2.0/footer";
import Headers from "./ver2.0/header";


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
  </main>
  )
}
export default NotFound;
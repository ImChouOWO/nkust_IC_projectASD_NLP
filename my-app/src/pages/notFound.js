import React from "react";
import "../css/style.css";
import "../css/responsive.css";
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
  </main>
  )
}
export default NotFound;
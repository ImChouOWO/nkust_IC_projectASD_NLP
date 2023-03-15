import React from "react";
import "../css/bootstrap.min.css";
import "../css/style.css";
import "../css/responsive.css";
import "../css/jquery.mCustomScrollbar.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';





const Headers = () => {
   
  return(
    

      <header className="full_bg">
       
   
          {/* <!-- header inner --> */}
          <div className="header">
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                          <div className="full">
                              <div className="center-desk">
                                  <div className="logo">
                                      <a href=""><img src={require("../components/images/selfcare.png")} alt="#"/></a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      
                      <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                          <nav className="navigation navbar navbar-expand-md navbar-dark ">
                              <button className="navbar-toggler" type="button" data-toggle="collapse"
                                      data-target="#navbarsExample04" aria-controls="navbarsExample04"
                                      aria-expanded="false" aria-label="Toggle navigation">
                                  <span className="navbar-toggler-icon"></span>
                              </button>
                              <div className="collapse navbar-collapse" id="navbarsExample04">
                                  <ul className="navbar-nav mr-auto">
                                      <li className="nav-item ">
                                          
                                            
                                          < Link to="/" className="nav-link" >首頁</Link>
                                            
                                      </li>
                                      <li className="nav-item">
                                         
                                          < Link to="/about" className="nav-link" >關於我們</Link>
                                          
                                      </li>
                                      <li className="nav-item">
                                         < Link to="/mainFunction" className="nav-link" >主要功能</Link>
                                          
                                      </li>
                                      <li className="nav-item">
                                          < Link to="/aboutASD" className="nav-link" >關於自閉症</Link>
                                      </li>
                                      <li className="nav-item">
                                        < Link to="/login" className="nav-link" >Login</Link>
                                      </li>
                                  </ul>
                              </div>
                          </nav>
                      </div>
                  </div>
              </div>
          </div>
          {/* <!-- end header inner --> */}
          {/* <!-- end header --> */}
          {/* <!-- banner --> */}
     
      </header>

  
     
  
  )
}
export default Headers;
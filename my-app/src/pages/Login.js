import  React from "react";
import '../components/images/icons/favicon.ico';
import '../vendor/bootstrap/css/bootstrap.min.css';
import '../components/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import '../vendor/animate/animate.css';
import '../vendor/css-hamburgers/hamburgers.min.css';
import '../vendor/select2/select2.min.css';
import '../css/util.css';
import '../css/main.css';
import '../vendor/tilt/tilt.jquery.min';
import 'bootstrap/dist/css/bootstrap.css';

const Login = () => {
  return (
      <div className="Login">
          <div className="limiter">
              <div className="container-login100">
                  <div className="wrap-login100"> 
                      <div className="login100-pic js-tilt" data-tilt="">
                          <img src={require("../components/images/img-01.png")}  alt={"IMG"}/>
                      </div>

                      <form className="login100-form validate-form">
					<span className="login100-form-title">
						會員登入
					</span>

                          <div className="wrap-input100 validate-input"
                               data-validate="Valid email is required: ex@abc.xyz">
                              <input className="input100" type="text" name="email" placeholder="Email"/>
                                  <span className="focus-input100"></span>
                                  <span className="symbol-input100">
                                      <i className="fa fa-envelope" aria-hidden="true"></i>
                                  </span>
                          </div>

                          <div className="wrap-input100 validate-input" data-validate="Password is required">
                              <input className="input100" type="password" name="pass" placeholder="Password"/>
                                  <span className="focus-input100"></span>
                                  <span className="symbol-input100">
                                      <i className="fa fa-lock" aria-hidden="true"></i>
                                  </span>
                          </div>

                          <div className="container-login100-form-btn">
                              <button className="login100-form-btn">
                                  登入
                              </button>
                          </div>

                          <div className="text-center p-t-12">
						<span className="txt1">
							忘記
						</span>
                              <a className="txt2" href="#">
                                    帳號 或 密碼?
                              </a>
                          </div>

                          <div className="text-center p-t-136">
                              <a className="txt2" href="#">
                                  創建一個新帳號!
                                  <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                              </a>
                          </div>
                      </form>
                  </div>
              </div>
          </div>

          <script src="../../src/vendor/jquery/jquery-3.2.1.min.js"></script>
          <script src="../../src/vendor/bootstrap/js/popper.js"></script>
          <script src="../../src/vendor/bootstrap/js/bootstrap.min.js"></script>
          <script src="../../src/vendor/select2/select2.min.js"></script>
          <script src="../../src/vendor/tilt/tilt.jquery.min.js"></script>
          {/*<script>*/}
          {/*    $('.js-tilt').tilt({*/}
          {/*    scale: 1.1*/}
          {/*})*/}
          {/*</script>*/}
          <script src="../js/main"></script>
      </div>
  )
}

export default Login;
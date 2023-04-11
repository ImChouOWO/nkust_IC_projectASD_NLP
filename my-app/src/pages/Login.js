import  React, { useState,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import io from 'socket.io-client';
import {Modal} from 'antd';
import '../components/images/icons/favicon.ico';
import '../css/util.css';
import '../css/main.css';



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [socket, setSocket] = useState(null);
    const [message ,setMessage] = useState([]);
    const [userName , setUserName] = useState(null)
    const navigate = useNavigate();
  
  
    
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
    
        socket.emit('login', [email, password]);
    
        socket.on('response', (data) => {
            setMessage(data.message);
            setUserName(data.message[0])
        });
        

      };
      useEffect(() => {
        if (message[0]== 'error') {
            console.log("user input error");
            Modal.warning({
                title: '帳號或密碼錯誤',
                content: '請確認是否輸入錯誤',
                destroyOnClose: true,
                onOk() {
                        setEmail("");       
                        setPassword("");
                        setMessage([]);
                }
                   
            });
           
        }else if(message.length === 2 && message[0]!=="error"){
            Cookies.set('token', email, { expires: 7 });  
            Cookies.set('userEmail', email, { expires: 7 });  
            Cookies.set('userName',userName,{expires:7}); 
            navigate('/'); 
        }
         
        }, [message]);
    
  

      

    useEffect(() => {
        const newSocket = io('http://51.79.145.242:8585');
          setSocket(newSocket);
    
          return () => {
            newSocket.disconnect();
          };
        }, []);

    
   
    
      
    
    
        

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
                              <input className="input100" type="text" name="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                                  <span className="focus-input100"></span>
                                  <span className="symbol-input100">
                                      <i className="fa fa-envelope" aria-hidden="true"></i>
                                  </span>
                          </div>

                          <div className="wrap-input100 validate-input" data-validate="Password is required">
                              <input className="input100" type="password" name="pass" placeholder="Password" value={password} onChange={handlePasswordChange}  />
                                  <span className="focus-input100"></span>
                                  <span className="symbol-input100">
                                      <i className="fa fa-lock" aria-hidden="true"></i>
                                  </span>
                          </div>

                          <div className="container-login100-form-btn">
                              <button type="button" className="login100-form-btn" onClick={handleSubmit} >
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
      </div>
  )
}

export default Login;
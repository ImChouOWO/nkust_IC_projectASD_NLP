import  React, { useState,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { AliwangwangOutlined } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
import Cookies from 'js-cookie';
import io from 'socket.io-client';
import '../css/main.css';


const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message,setMessage] =useState([]);
    const [name,setName]= useState("");
    const [socket, setSocket] = useState(null);
    const navigate = useNavigate();
  
  
    
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleNameChange = (e) => setName(e.target.value);
    
    const handleSubmit = (event) => {
        event.preventDefault();
    
        socket.emit('UserRegister', [name,email, password]);
    
        socket.on('response', (data) => {
            setMessage(data.message);
        });
      };



     useEffect(() => {
        if (message == 'exists') {
            console.log("exists");
            Modal.warning({
                title: '帳號已存在',
                content: 'eamil:'+email+" 已被使用",
                destroyOnClose: true,
                onOk() {
                    setEmail("");
                    setName("");
                    setPassword("");
                    setMessage([]);
                  }
               
            });
        } 
        else if (message == 'successfully') {
            console.log("successfully");
            Modal.success({
                title: '註冊成功',
                content: '即將跳轉登入頁面....',
                destroyOnClose: true,
                onOk(){
                    navigate('/login');
                }
            });
            
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
						會員註冊
					</span>
                         <div className="wrap-input100 validate-input"
                               data-validate="Valid email is required: ex@abc.xyz">
                              <input className="input100" type="text" name="email" placeholder="Name" value={name} onChange={handleNameChange} />
                                  <span className="focus-input100"></span>
                                  <span className="symbol-input100">
                                    
                                    <AliwangwangOutlined />
            
                                  
                                  </span>
                          </div>


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
                                  註冊
                              </button>
                             
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Register;
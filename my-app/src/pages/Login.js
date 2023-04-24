import  React, { useState,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import io from 'socket.io-client';
import { Modal,Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import '../components/images/icons/favicon.ico';
import '../css/util.css';
import '../css/main.css';


const { Option } = Select;
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender,setGender] = useState("")
    const [socket, setSocket] = useState(null);
    const [message ,setMessage] = useState([]);
    const [userName , setUserName] = useState(null);
    
    const navigate = useNavigate();
    
  
  
    
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    function handleGenderChange(value, option) {
        console.log(value); // 印出選中的 value
        console.log(option); // 印出選中的 Option 的完整物件
        setGender(value);
    }
    const handleNameChage = (e) => setUserName(e.target.value);
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
        else if(message =="exists"){
            Modal.warning({
                title: '帳號已存在',
                content: '請更換Email',
                destroyOnClose: true,
                onOk() {
                        setEmail("");       
                        setPassword("");
                        setMessage([]);
                        
                }
            });
        }
        else if(message == "successfully"){
            Modal.success({
                title: '註冊成功',
                content: '返回登入頁面',
                destroyOnClose: true,
                onOk() {
                        setEmail("");       
                        setPassword("");
                        setMessage([]);
                        onClose();
                        
                }
            });
        }
        else if (message == 'updateSuccessfully') {
            Modal.success({
                title: '更新成功',
                content: '返回登入頁面',
                destroyOnClose: true,
                onOk() {
                        setEmail("");       
                        setPassword("");
                        setMessage([]);
                        onClose2();
                        
                }
            });
        }
        else if (message == 'samePasswords') {
            Modal.warning({
                title: '與舊密碼相同',
                content: '無法設置相同的密碼',
                destroyOnClose: true,
                onOk() {
                        setPassword("");
                        setMessage([]);
                        
                        
                }
            });
        }
        else if (message == 'notExist') {
            Modal.warning({
                title: 'Email不存在',
                content: '確認是否輸入錯誤',
                destroyOnClose: true,
                onOk() {
                    setPassword("");
                    setEmail("")
                    setMessage([]);
                        
                        
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

    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };


    const [open2, setOpen2] = useState(false);
    const showDrawer2 = () => {
        setOpen2(true);
    };
    const onClose2 = () => {
        setOpen2(false);
    };
    const resetPassWord =()=>{
        if (validateEmail(email)&&password.length>=8) {
            socket.emit('update',[email,password])
            socket.on('response', (data) => {
                setMessage(data.message);
                
            });
        }
        else{
            Modal.warning({
                title: '帳號或密碼錯誤',
                content: '請確認是否輸入錯誤(密碼長度需大於等於８)',
                destroyOnClose: true,
                onOk() {
                        setEmail("");       
                        setPassword("");
                        setMessage([]);
                }
                   
            });
        }
        
    }
    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
      }
    const creatCount = ()=>{
        console.log(message);
        if (validateEmail(email)&&password.length>=8 && userName && gender) {
            socket.emit('creat', [email,password,userName,gender]);
            socket.on('response', (data) => {
                setMessage(data.message);
                
            });
        }
        else{
            Modal.warning({
                title: '帳號或密碼錯誤',
                content: '請確認是否輸入錯誤(密碼長度需大於等於８)',
                destroyOnClose: true,
                onOk() {
                        setEmail("");       
                        setPassword("");
                        setMessage([]);
                }
                   
            });
        }
        
        

    }

   



    
   
    
      
    
    
        

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
                              <a className="txt2" onClick={showDrawer2} >
                                    帳號 或 密碼?
                              </a>
                          </div>

                          <div className="text-center p-t-136">
                              <a className="txt2" onClick={showDrawer}>
                                  創建一個新帳號!
                                  <i className="fa fa-long-arrow-right m-l-5"  aria-hidden="true"></i>
                              </a>
                          </div>
                      </form>
                      <Drawer
                        title="創建帳號"
                        width={720}
                        onClose={onClose}
                        open={open}
                        bodyStyle={{
                        paddingBottom: 80,
                        }}
                        extra={
                        <Space>
                            <Button onClick={onClose}>取消</Button>
                            <Button onClick={creatCount} type="primary">
                            送出
                            </Button>
                        </Space>
                        }
                    >
                        <Form layout="vertical" hideRequiredMark>
                        <Row gutter={16}>
                            <Col span={12}>
                            <Form.Item
                                name="name"
                                label="使用者名稱"
                                rules={[
                                {
                                    required: true,
                                    message: '請輸入使用者名稱',
                                },
                                ]}
                            >
                                <Input value={userName} placeholder="請輸入使用者名稱" onChange={handleNameChage} />
                            </Form.Item>
                            </Col>
                            <Col span={12}>
                            <Form.Item
                                
                                label="帳號"
                                rules={[
                                {
                                    required: true,
                                    message: '請輸入電子郵件',
                                },
                                ]}
                            >
                                <Input value={email} placeholder="請輸入電子郵件" onChange={handleEmailChange}/>
                            </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="password"
                                label="密碼"
                                rules={[
                                {
                                    required: true,
                                    message: '請輸入密碼',
                                },
                                ]}
                            >
                                <Input value={password} placeholder="請輸入密碼（長度需大於等於８）" onChange={handlePasswordChange} />
                            </Form.Item>
                            </Col>
                            <Col span={12}>
                            <Form.Item
                                name="approver"
                                label="性別"
                                rules={[
                                {
                                    required: true,
                                    message: '請選擇性別',
                                },
                                ]}
                            >
                                <Select placeholder="請選擇性別" onChange={handleGenderChange}>
                                <Option value="meal">男</Option>
                                <Option value="femeal">女</Option>
                                <Option value="Not Available">不透露</Option>
                                </Select>
                            </Form.Item>
                            </Col>
                        </Row>
                      
                        </Form>
                    </Drawer>
                    <Drawer
                        title="重設密碼"
                        width={720}
                        onClose={onClose2}
                        open={open2}
                        bodyStyle={{
                        paddingBottom: 80,
                        }}
                        extra={
                        <Space>
                            <Button onClick={onClose2}>取消</Button>
                            <Button onClick={resetPassWord} type="primary">
                            送出
                            </Button>
                        </Space>
                        }
                    >
                        <Form layout="vertical" hideRequiredMark>
                        <Row gutter={16}>
                            
                            <Col span={12}>
                            <Form.Item
                                
                                label="帳號"
                                rules={[
                                {
                                    required: true,
                                    message: '請輸入電子郵件',
                                },
                                ]}
                            >
                                <Input value={email} placeholder="請輸入電子郵件" onChange={handleEmailChange} />
                            </Form.Item>
                            </Col>
                            <Col span={12}>
                            <Form.Item
                                name="password"
                                label="密碼"
                                rules={[
                                {
                                    required: true,
                                    message: '請輸入密碼',
                                },
                                ]}
                            >
                                <Input value={password} placeholder="請輸入密碼（長度需大於等於８）" onChange={handlePasswordChange} />
                            </Form.Item>
                            </Col>
                        </Row>
                        </Form>
                    </Drawer>
                    
                    
                  </div>
              </div>
          </div>
      </div>
      
  )
}

export default Login;
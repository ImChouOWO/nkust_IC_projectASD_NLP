import  React, { useState,useEffect} from "react";
import { Link,useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import io from 'socket.io-client';



const Headers = () => {
    const [userName , setUserName] = useState("");
    const [socket, setSocket] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(Boolean(userName));
    const navigate = useNavigate();
    useEffect(() => {
        const newSocket = io('http://51.79.145.242:8585');
          setSocket(newSocket);
    
          return () => {
            newSocket.disconnect();
          };
        }, []);

    useEffect(() => {
        if (socket && document.cookie.indexOf('token') !== -1) {
            const userToken = Cookies.get('token');
            const nameToken = Cookies.get('userName');
            setIsLoggedIn(true);
            setUserName(nameToken)
            
        }
        else{
            setIsLoggedIn(false);
        }
    }, [socket]);

    const logOut =()=>{
        setIsLoggedIn(false);
        Cookies.remove('token');
        Cookies.remove('userName');
        Cookies.remove('hasScore');
        socket.emit('logOut', 1);
        navigate("/")
    }
    
        
   
        
   
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
                                      <a href=""><img src={require("../components/images/selfcare.png")}/></a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      
                      <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                          <nav className="navigation navbar navbar-expand-md navbar-dark ">
                              {/* <button className="navbar-toggler" type="button" data-toggle="collapse"
                                      data-target="#navbarsExample04" aria-controls="navbarsExample04"
                                      aria-expanded="false" aria-label="Toggle navigation">
                                  <span className="navbar-toggler-icon"></span>
                              </button> */}
                              
                              <div className="collapse navbar-collapse show" id="navbarsExample04">
                                  <ul className="navbar-nav mr-auto">
                                      <li className="nav-item ">
                                          
                                            
                                          < Link to="/" className="nav-link" >首頁</Link>
                                            
                                      </li>
                                      <li className="nav-item">
                                         
                                          < Link to="/about" className="nav-link" >關於我們</Link>
                                          
                                      </li>
                                      
                                      <li className="nav-item">
                                          < Link to="/aboutASD" className="nav-link" >關於自閉症</Link>
                                      </li>
                                      {isLoggedIn ? (
                                        <li className="nav-item">
                                        < Link to="/mainFunction" className="nav-link" >主要功能</Link>
                                         
                                        </li>
                                       
                                        ) : (
                                            <br></br>
                                        )}
                                      
                                      {isLoggedIn ? (
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link" onClick={logOut}>登出</Link>
                                        </li>
                                       
                                        ) : (
                                        <li className="nav-item">
                                            <Link to="/login" className="nav-link">登入</Link>
                                        </li>
                                        )}
                                        {isLoggedIn ? (
                                        <li className="nav-item">
                                            < Link to="/" className="nav-link" >歡迎 {userName}</Link>
                                        </li>
                                       
                                        ) : (
                                            <br></br>
                                        )}
                                      
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
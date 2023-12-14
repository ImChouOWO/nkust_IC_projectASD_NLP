import  React, { useState,useEffect} from "react";
import { Link,useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import io from 'socket.io-client';
import './css/header.css'


const Headers =()=>{
    const [menuActive,setMenuActive] = useState(true)
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

    
    const menuOnClick =()=>{
        setMenuActive(!menuActive)
    }
    const logOut =()=>{
        setIsLoggedIn(false);
        Cookies.remove('token');
        Cookies.remove('userName');
        Cookies.remove('hasScore');
        socket.emit('logOut', 1);
        navigate("/")
    }
    const NavBar = (props) => {
        const { isLoggedIn, userName, logOut } = props;
        return(
        <ul className="navBar">
            <li className="nav">
                <Link to="/" className="navLink">首頁</Link>
            </li>
            <li className="nav">
                <Link to="/about" className="navLink">關於我們</Link>
            </li>
            <li className="nav">
                <Link to="/aboutASD" className="navLink">關於自閉症</Link>
            </li>
            {isLoggedIn && (
                <li className="nav">
                    <Link to="/mainFunction" className="navLink">主要功能</Link>
                </li>
            )}
            {isLoggedIn ? (
                <li className="nav">
                    <Link to="/" className="navLink" onClick={logOut}>登出</Link>
                </li>
            ) : (
                <li className="nav">
                    <Link to="/login" className="navLink">登入</Link>
                </li>
            )}
            {isLoggedIn && (
                <li className="nav">
                    <Link to="/" className="navLink">歡迎 {userName}</Link>
                </li>
            )}
        </ul>
        );
        };
 

    return(
       <div className="headerAll">
            <div className={menuActive ? "slider":"sliderOpen"}>
            <NavBar isLoggedIn={isLoggedIn} userName={userName} logOut={logOut} />
            </div>
            <div className="headerContainer">   
                <div className="header">
                            <div className="icon">MyApp</div>
                            <div className="menuIcon" onClick={menuOnClick} >☰</div>
                            <NavBar isLoggedIn={isLoggedIn} userName={userName} logOut={logOut} />
                </div>
            </div>
        </div>

    );
}
export default Headers;
import  React, { useState,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import Headers from "./header";
import Footer from "./footer";
import "./css/function.css"
const MainFunction =()=>{
    const navigate = useNavigate();
    return(
        
        <div className="founctionBody">
            <Headers/>
            <div className="functionContanier">
                <div className="content">
                    <div className="function">
                        <img src={require("./img/analyze.png")}></img>
                        <span>狀況分析</span>
                        <button type="button" className="btn" onClick={()=>{navigate("/checkList")}} >
                            前往
                        </button>
                    </div>
                    <div className="function">
                        <img src={require("./img/chat.png")}></img>
                        <span>聊天機器人</span>
                        <button type="button" className="btn" onClick={()=>{navigate("/chatRoom")}} >
                            前往
                        </button>
                    </div> 
                    <div className="function">
                        <img src={require("./img/game.png")}></img>
                        <span>各式小遊戲</span>
                        <button type="button" className="btn" onClick={()=>{navigate("/game")}}>
                            前往
                        </button>
                    </div> 
                    <div className="function">
                        <img src={require("./img/feedback.png")}></img>
                        <span>結果判斷</span>
                        <button type="button" className="btn" onClick={()=>{navigate("/dashboard")}}>
                            前往
                        </button>
                    </div> 
                     
                </div>
            </div>
            <Footer/>
        </div>
           
    );
};
export default MainFunction;
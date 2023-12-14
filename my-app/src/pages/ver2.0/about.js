import React,{useState,useEffect} from "react";
import Headers from "./header";
import Footer from "./footer";
import "./css/about.css"
const About=()=>{
    return(
        <div className="aboutBody">
        <Headers/>
        <div className="aboutContaniner">
            <div className="title">
                <span>關於我們</span>
            </div>
            <div className="mainContent">
                <div className="content">
                   
                    <div className="textArea">
                        <spand className="text">
                            我們是一個學生團隊，希望能透過我們所做出的網站來幫助自閉症患者，主旨在於利用語言模型開發出更多不同的可能。
                        </spand>
                      
                    </div>
                </div>
                <div className="img"><img src={require("./img/aboutOurs.png")}></img></div>
            </div>

        </div>
        <Footer/>
        </div>
    );
}
export default About;
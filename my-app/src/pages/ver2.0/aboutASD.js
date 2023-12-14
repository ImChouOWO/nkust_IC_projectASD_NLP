import React,{useEffect,useState} from "react";
import Headers from "./header";
import Footer from "./footer";
import "./css/asd.css"

const ASD =()=>{
    return(
        <div className="aboutASD">
            <Headers/>
                <div className="titleASD">
                    <span className="text">自閉症的淺知識</span>
                </div>
            <div className="ASDContaniner">
                
                <div className="content">
                    
                    <div className="textArea">
                        <span className="textTitle">基因、遺傳學?</span>
                        <span className="text">自閉症並不是精神疾病，而是一種複雜的神經生理障礙，而名稱在DSM-5中被調整為自閉症譜系障礙。它是一種由於先天性的腦部損傷所造成的發展障礙，與基因以及遺傳學有所相關。</span>
                        <div className="line"></div>
                        <span className="text">在遺傳學方面，自閉症研究比幾年前復雜得許多。科學家們已經確定了幾十個似乎是重要參與者的基因，並且正在追踪這些基因的行為活動。 但隨著科技日新月異，一個問題出現：究竟怎麼確定，到底什麼是自閉症？</span>
                        <div className="line"></div>
                        <span className="text">"我們認為現在自閉症的範圍相當廣泛."
                            ---Bonita Klein-Tasman, 威斯康星大學密爾沃基分校的心理學教授.</span>
                        <div className="line"></div>
                    </div>
                    <div className="imgContent">
                        <div className="img"><img src={require("./img/03_0.png")}></img></div>
                    </div>
                    
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default ASD;
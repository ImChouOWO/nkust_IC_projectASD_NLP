import  React, { useState,useEffect} from "react";
import Headers from "./header";
import Footer from "./footer";
import './css/mainpage.css'
const MainPage =()=>{
    return (
        <div className="mainBody">
            <Headers/>
            <div className="mainPageContainer">
                <div className="goalContainer">
                    <div className="goalContent">
                        <div className="content">
                            <p className="title">我們的目標</p>
                            <div className="innerContent">
                                <p className="text">
                                    伴星聊癒的主旨是透過以GPT所設計的聊天機器人與其他小遊戲來幫助測試者了解自己與
                                    <span className="highlight">自閉症</span>的關係， 以及達到醫療輔助的功能。
                                </p>
                                <p className="text">
                                    我們的目標是做出一個能夠對人以及醫學有幫助的智能型聊天機器人。
                                </p>
                                <p className="text">
                                    我們希望透過
                                    <span className="highlight">伴星聊癒</span>讓測試者能夠更了解自己、在未來能夠投入到醫療輔助的成效，甚至緩解患者的症狀。
                                </p> 
                            </div>  
                        </div>
                    </div>
                    <div className="goalImg"><img src={require("./img/01_0.png")}></img></div>
                </div>
                <div className="aboutContainer">
                <div className="aboutImg"><img src={require("./img/02_0.png")}></img></div>
                    <div className="aboutContent">
                        <div className="textDiv">
                            <p className="title">自閉症不是精神疾病?</p>
                            <p className="text">根據「精神疾病診斷與統計手冊-第五版（DSM-5）」所寫到，自閉症並不是一種精神疾病，而是先天性的長期發展障礙。</p>
                        </div>
                    </div>
                    
                </div>
                <div className="skillContainer">
                    <div className="content">
                        <div className="row_1">
                            <p className="title">
                            我們使用GPT對話式聊天機器人與Web自閉症檢測，判斷測試者目前的精神狀況
                            </p>
                        </div>
                        <div className="row_2">
                            <div className="column">
                                <p className="skillName">GPT</p>
                                <div className="line"></div>
                                <div className="skillContent">
                                <span>
                                    辨別並理解句子的內容進而判斷使用者精神狀況之嚴重性
                                </span>
                                
                                </div>
                                <div className="buttonDiv">
                                    <a className="aboutSkill">了解GPT</a>
                                </div>
                            </div>
                            <div className="column">
                                <p className="skillName">jieba</p>
                                <div className="line"></div>
                                <div className="skillContent">
                                <span>
                                    利用Python jieba(結巴)進行斷詞斷句並利用NLTK進行詞性標註
                                </span>
                                
                                </div>
                                <div className="buttonDiv">
                                    <a className="aboutSkill">了解jieba</a>
                                </div>
                                
                            </div>
                            <div className="column">
                                <p className="skillName">TF-IDF詞頻</p>
                                <div className="line"></div>
                                <div className="skillContent">
                                <span>
                                    分析使用者與機器人聊天過程中是否出現負面詞彙
                                </span>
                                
                                </div>
                                <div className="buttonDiv">
                                    <a className="aboutSkill">了解TF-IDF詞頻</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <Footer/>
        </div>
    );
}
export default MainPage;
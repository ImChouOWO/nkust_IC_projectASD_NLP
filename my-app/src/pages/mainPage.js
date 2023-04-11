import React from "react";
import "../css/style.css";
import "../css/responsive.css";
import Headers from "./header";
import Footer from "./footer";
const MainPage = () => {
    return (
        <main className="main-layout inner_page">
        {/*<!-- header -->*/}
        <Headers/>
        <header className="full_bg">
            <section class="banner_main">
                <div id="myCarousel" class="carousel slide banner" data-ride="carousel">
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="container">
                            <div class="carousel-caption  banner_po">
                            <div class="row">
                                <div class="col-md-5">
                                    <div class="yo_img">
                                        <figure><img src={require("../components/images/solution.png")} alt="#"/></figure>
                                    </div>
                                </div>
                                <div class="col-md-7">
                                    <div class="yoga_box">
                                        <nobr><h1> <strong>伴</strong> 星 <strong>聊</strong> 癒</h1></nobr>
                                        <span><strong>-自閉症</strong>與<strong>聊天機器人</strong>與<strong>它的小夥伴</strong></span>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </header> 
        {/*<!-- end header -->*/}
        {/* <!-- our-goal --> */}
        <div className="our-goal">
            <div className="our-goal-container">                
                <h1>我們的目標</h1>
                <p>伴星聊癒的主旨是透過以GPT-2所設計的聊天機器人與其他小功能(小遊戲..等)來幫助測試者<br />了解自己與<span>自閉症</span>的關係， 以及達到醫療輔助的功能。</p>
                <p>我們的目標是做出一個能夠對人以及醫學有幫助的智能型聊天機器人。</p>
                <p>我們希望透過<span>伴星聊癒</span>讓測試者能夠更了解自己、在未來能夠投入到醫療輔助的成效，甚至緩解患者的症狀。</p>
                <a className="read_more yoga_btn" href="/about"> 關於我們</a>
            </div>
            <img className="care" src={require("../components/images/care.jpg")} alt="#"/>
        </div>
        {/* <!-- end our-goal --> */}
        {/* <!-- middle --> */}
        <div class="middle">
            <div class="container-fluid">
                <div class="row d_flex">
                <div class="col-md-6">
                    <div class="titlepage">
                        <h2 >自閉症不是精神疾病?</h2>
                        <p>根據「精神疾病診斷與統計手冊-第五版（DSM-5）」所寫到，自閉症並不是一種精神疾病，而是先天性的長期發展障礙。</p>
                        <a class="read_more ye_b5n " href="/aboutASD" > 閱讀更多</a>
                    </div>
                </div>
                <div class="col-md-5 offset-md-1 padding_right0">
                    <div class="yoga_img">
                        <figure><img src={require("../components/images/care01.jpg")} alt="#"/></figure>
                    </div>
                </div>
                </div>
            </div>
        </div>
        {/* <!-- end middle --> */}
        {/*<!-- pricing -->*/}
        <div className="pricing_main">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="titlepage">

                            <span>我們使用GPT-2對話式聊天機器人與Web自閉症檢測，判斷測試者目前的精神狀況 </span>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="pricing">
                            <h3>GPT-2</h3>
                            <p>辨別並理解句子的內容<br />進而判斷使用者精神狀況之嚴重性</p>
                            <a className="read_more dark_bg" href="https://picture.iczhiku.com/weixin/message1588815507914.html" target="_blank"> 了解 GPT-2</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="pricing ">
                            <h3>jieba</h3>
                            <p><nobr>利用Python jieba(結巴)進行斷詞斷句</nobr><br />並利用NLTK進行詞性標註</p>
                            <a className="read_more dark_bg" href="https://github.com/fxsjy/jieba" target="_blank"> 了解 jieba</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="pricing">
                            <h3><nobr>TF-IDF詞頻</nobr></h3>
                            <p>分析使用者與機器人聊天過程中<br />是否出現負面詞彙</p>
                            <a className="read_more dark_bg" href="https://zh.wikipedia.org/zh-tw/Tf-idf" target="_blank"> 了解 TF-IDF</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*<!-- end pricing -->*/}  
        {/*<!--  footer -->*/}
        <Footer/>
        {/*<!-- end footer -->*/}
        {/*<!-- Javascript files-->*/}
        </main>
    )
}
export default MainPage
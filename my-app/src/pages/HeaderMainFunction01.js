import  React, { useState,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import "../css/bootstrap.min.css";
import "../css/style.css";
import "../css/responsive.css";
import { Button, Modal } from 'antd'
import Cookies from 'js-cookie';
import Headers from "./header";
import Footer from "./footer";

const MainFunction01 = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(()=>{
        if (Cookies.get('hasScore') == "false") {
            setIsModalOpen(true);  
        } else if(Cookies.get('hasScore') == "true"){
            setIsModalOpen(false);  
        }
    })
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
        navigate('/checkList');
    };
    const handleCancel = () => {
        setIsModalOpen(false);
        navigate('/');
    };
  return(
      <main className="main-layout inner_page">
      <Headers/>

      {/*<!-- end banner -->*/}
      <div className="back_re">
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <div className="title">
                          <h2>準備開始檢測</h2>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <Modal title="需填寫檢測量表" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>點選確認跳轉頁面</p>
        <p>點選取消回到首頁</p>
      </Modal>
      {/*<!-- our classes -->*/}
      <div className="classes">
          <div className="container">
              <div className="row">
                  <div className="col-sm-12">
                      <div className="titlepage">

                     <span >準備好的話就可以點擊「狀況分析」開始進行判斷囉 !<br/>
                         也可以點擊「結果判斷」觀看上次的結果~
                     </span>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-4 col-sm-6 d_none">
                  </div>
                  <div className="col-md-4 col-sm-6 margin_bott">
                      <div className="our_yoga">
                      <Button type="primary" onClick={()=>{navigate("/checkList")}}>前往</Button>
                          <figure><img src={require("../components/images/analyze.png")} alt="#"/></figure>
                          <h3>狀況分析</h3>
                          <span>這一切的起點!</span>
                          
                      </div>
                  </div>
                  <div className="col-md-4 col-sm-6 d_none">
                  </div>
                  <div className="col-md-4 col-sm-6">
                      <div className="our_yoga">
                    
                          <figure><img src={require("../components/images/speak.png")} alt="#"/></figure>
                          <h3>聊天機器人</h3>
                          <span  >與機器人聊天何嘗不是一種樂趣?</span><br/>
                          <Button type="primary" onClick={()=>{navigate("/chatRoom")}}>前往</Button>
                      </div>
                  </div>
                  <div className="col-md-4 col-sm-6 d_none">
                  </div>
                  <div className="col-md-4 col-sm-6">
                      <div className="our_yoga">
                          <figure><img src={require("../components/images/block.png")} alt="#"/></figure>
                          <h3>各式小遊戲</h3>
                          <span>遊戲趣味多。</span><br/>
                          <Button type="primary" onClick={()=>{navigate("/game")}}>前往</Button>
                      </div>
                  </div>
                  <div className="col-md-4 offset-md-4 col-sm-6  margin_top">
                      <div className="our_yoga">
                          <figure><img src={require("../components/images/opportunity.png")} alt="#"/></figure>
                          <h3>結果判斷</h3>
                          <span>可以依照上次結果進行對比!(如果有的話)</span>
                          <Button type="primary" onClick={()=>{navigate("/dashboard")}}>前往</Button>
                          {/*<a className="read_more yoga_btn" href="Javascript:void(0)"> 閱讀更多</a>*/}
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/*<!-- end our classes -->*/}

      {/*<!--  footer -->*/}
      <Footer/>
      {/*<!-- end footer -->*/}
  </main>
  )
}

export default MainFunction01;
import  React, { useState,useEffect} from "react";
import './css/footer.css';
const Footer =()=>{
    return(
        <div className="footer">
            <div className="row_1">
                <div className="column_1">
                    <div className="content">
                        
                        <div className="developer">
                        <p className="title">開發者</p>
                        <p className="footerContent">周呈翰</p>
                        <p className="footerContent">王嬿涵</p>
                        <p className="footerContent">趙後鈞</p>
                        </div>
  
                        
                    </div>
                </div>
                <div className="column_2">
                    <div className="content">
                    <div className="developer">   
                    <p className="title">聯絡我們</p>
                    <p className="footerContent">C109156112@nkust.edu.tw</p>
                    <p className="footerContent">+886-930-859-852</p>
                    <p></p>
                    </div>
                    </div>
                </div>  
            </div>
            <div className="row_2">
                <div className="ver">
                    <p>product version : 0.01</p>
                </div>
            </div>
            

        </div>
    );
}
export default Footer;
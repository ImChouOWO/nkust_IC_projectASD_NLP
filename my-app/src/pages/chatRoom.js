import React from "react";
import "../css/style.css";
import "../css/responsive.css";
import Footer from "./footer";
import Headers from "./header";
import Chat from "./components/Chat";

const ChatRoom = () => {
  return(
      <main className="main-layout inner_page">
      <Headers/>
      
      <div className="back_re">
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <div className="title">
                          <h2></h2>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="pepole">
         <div className="container">
             <div className="row">
             <Chat/>
             </div>
         </div>
      </div>
      {/* <!-- footer --> */}
      <Footer/>

  </main>
  )
}
export default ChatRoom;
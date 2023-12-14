import React from "react";
import "./ver2.0/css/chatRoom.css"
import Footer from "./ver2.0/footer";
import Headers from "./ver2.0/header";
import Chat from "./components/Chat";

const ChatRoom = () => {
  return(
      <>
      <Headers/>
      
      
  
         <div className="chatRoomContainer">
            
             <Chat/>
             
         </div>
     
  
     
      </>


  )
}
export default ChatRoom;
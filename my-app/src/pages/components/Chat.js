import React, { useState, useEffect } from 'react';
import { Input, Button, List } from 'antd';
import { PlayCircleFilled } from '@ant-design/icons';
import io from 'socket.io-client';
import styled from '@emotion/styled';
import Cookies from 'js-cookie';

const Chat = () => {

    const { TextArea } = Input;
    const [socket, setSocket] = useState(null);
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const antButton = styled(Button)`
      color: red;
      background-color: blue;
      border-radius: 5px;
    `;
    
    useEffect(() => {
    const newSocket = io('http://51.79.145.242:8585');
      setSocket(newSocket);

      return () => {
        newSocket.disconnect();
      };
    }, []);

    useEffect(() => {
      if (!socket) {
        return;
      }
  
      socket.on('message', (data) => {
        const userEmail = Cookies.get("userEmail");
        if (userEmail == data[1]) {
          setMessages([...messages, data[0]]);
        }
        
      });
      socket.on('response', (data) => {
        const userEmail = Cookies.get("userEmail");
        if (userEmail == data.message[1]) {
          setMessages([...messages, data.message[0]]);
        }
        
      });
  
      return () => {
        socket.off('message');
      };
    }, [socket, messages]);
  
    const sendMessage = () => {
      const userEmail = Cookies.get("userEmail");
      socket.emit('message', [message,userEmail]);
      setMessage('');
    };


    return(
      
        <div style={{ margin: 24 }}>
      <List
        itemLayout="horizontal"
        dataSource={messages}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
      <div style={{ margin: 24, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <TextArea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter message"
          autoSize={{ minRows: 2  , maxRows: 6 }}>
          
        </TextArea>
        <Button  type="primary"  onClick={sendMessage}>
        <PlayCircleFilled />
        </Button>   
        
        
      </div>
    </div>
  
    );
};

export default Chat;

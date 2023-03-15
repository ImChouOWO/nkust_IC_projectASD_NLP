import React, { useState, useEffect } from 'react';
import { Input, Button, List } from 'antd';
import { PlayCircleFilled } from '@ant-design/icons';
import styles from "./css/style.css" 
import io from 'socket.io-client';
import styled from '@emotion/styled';

const Test = () => {

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
    const newSocket = io('http://0.0.0.0:8585');
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
        setMessages([...messages, data]);
      });
      socket.on('response', (data) => {
        setMessages([...messages, data.message]);
      });
  
      return () => {
        socket.off('message');
      };
    }, [socket, messages]);
  
    const sendMessage = () => {
      socket.emit('message', message);
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

export default Test;

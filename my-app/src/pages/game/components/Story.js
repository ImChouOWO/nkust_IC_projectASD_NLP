import  React, { useEffect, useState} from "react";
import { Button,Divider, Modal , Input, Image, Space,Steps } from 'antd';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import io from 'socket.io-client';

const Story = () => {
  const description = '點擊圖片，放大圖片';
  const { TextArea } = Input;
  const [currentState , setCrrent] = useState(0);
  const [nowPicture , setPicture] = useState([require("../img/story/story1.png"),require("../img/story/story2.png"),require("../img/story/story3.png"),require("../img/story/story4.png")])
  const [textArea, setTextArea] = useState(['', '', '', '']);
  const [btnText , setText] =useState("下一張");
  const [open, setOpen] = useState(false);
  const [socket, setSocket] = useState(null);
  const navigate = useNavigate();
  const [currentTime ,setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [timer,setTimer] = useState(true);
  const [timeArray,setArray] = useState(['','','',''])

  useEffect(() => {
    if (timer) {
      const id = setInterval(() => {
        setTime((prevCount) => prevCount + 1);
   
      }, 1000);

      setIntervalId(id);
      
      
      
    } else {
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
    
    }
  }, [timer]);

  useEffect(() => {
    const newSocket = io('http://51.79.145.242:8585');
      setSocket(newSocket);

      return () => {
        newSocket.disconnect();
      };
    }, []);
  const onChange = (e) => {
    const newTextArea = [...textArea];
    newTextArea[currentState] = e.target.value;
    setTextArea(newTextArea);
    
  };
  const timerIndex =(e)=>{
    const newTimeArray = [...timeArray];
    newTimeArray[currentState] = e;
    setArray(newTimeArray);
  }
  const nextPicture =()=>{
    
    setTime(0);
    if (currentState <3) {
      setCrrent(currentState+1);
      timerIndex(currentTime);
      if (currentState == 2) {
        setText("提交")
      }
      
    }
    if (btnText =="提交") {
      console.log("finish");
      timerIndex(currentTime);
      clearInterval(intervalId);
      setIntervalId(null);
      showModal();

    }
  }
  const prePicture =()=>{
    setTimer(true)
    if (currentState >0) {
      setCrrent(currentState-1);
      setText("下一張");
    }
  }
  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };
  const sendMessage =()=>{
    hideModal()
    // console.log(timeArray);

    if (textArea[0].length <=49 || textArea[1].length <=49|| textArea[2].length <=49||textArea[3].length <=49) {
      console.log("no input");
      warning();
      
    }
    else{
      socket.emit('story',[textArea,Cookies.get('userEmail'),timeArray] );
      // window.location.reload()
    }
    

  }
  const warning = () => {
    Modal.warning({
      title: '輸入錯誤',
      content: '請確保每一段大於50字(含50字)',
    });
  };
  






  return(

      
      <div className="pepole">
         <div className="container">
             <div className="row">
             <Modal
                title="預覽(按下送出返回遊戲選單)"
                open={open}
                onOk={sendMessage}
                onCancel={hideModal}
                okText="送出"
                cancelText="返回"
              >
                
                <h5>第一段</h5>
                <p>{textArea[0]}</p>
                <h5>第二段</h5>
                <p>{textArea[1]}</p>
                <h5>第三段</h5>
                <p>{textArea[2]}</p>
                <h5>第四段</h5>
                <p>{textArea[3]}</p>
              </Modal>
              
             <Steps style={{marginBottom:"10px"}}
                current={currentState}
                items={[
                  {
                    title: '第一張',
                    description
                  
                  },
                  {
                    title: '第二張',
                    description
                    
                   
                  },
                  {
                    title: '第三張',
                    description
                    
                  },
                  {
                    title: '第四張',
                    description
                    
                  },
                ]}
              />

              <Space>
              <Image 
                width={400}
                height={400}
                style={{marginBottom:"20px"}}
                src={nowPicture[currentState]}
                
              />
              
              <p>
                {textArea[0]}
              </p>
              <Divider />
              <p>
              {textArea[1]}
              </p>
              <Divider  />
              <p>
              {textArea[2]}
              </p>
              <Divider  />
              <p>
              {textArea[3]}
              </p>

              </Space>
              <Space.Compact direction="vertical"
                style={{
                  width: '100%',
                }}
              >
                <TextArea
                    showCount
                    maxLength={100}
                    style={{
                      height: 120,
                      marginBottom: 24,
                      width:"100%",
                      marginTop:10

                    }}
                    onChange={onChange}
                    placeholder="can resize"
                    allowClear="true"
                    value={textArea[currentState]}
                  />
                  <Space.Compact direction="horizontal" style={{marginBottom: 24,}}>
                    <Button type="primary" onClick={prePicture}>上一張</Button>
                    <Button type="primary" onClick={nextPicture}>{btnText}</Button>
                  </Space.Compact>
                
              </Space.Compact>
             </div>
         </div>
      </div>
  )
}
export default Story;
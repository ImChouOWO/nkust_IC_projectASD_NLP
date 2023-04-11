import React,{ useState,useEffect } from 'react';
import { Button,Modal, Space } from 'antd';
import CardIndex from './cardIndex';
import io from 'socket.io-client';
import Cookies from 'js-cookie';
import "../css/game.css";


function Cards(){
    const [items, setItems] = useState([])
    const [prev, setPrev] = useState(-1);
    const [isChoose , setChoose] = useState(false);
    const [isStart , setStart] = useState(false)
    const [btnText , setText] = useState("START");
    const [gameState ,setGameState] = useState("");
    const [puzzleNumber,setNumber] =useState();
    const [isfinish,setFinish] = useState(true);
    const [currentTime ,setTime] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
    const [timer,setTimer] = useState(false);
    const [socket, setSocket] = useState(null);
    useEffect(() => {
        const newSocket = io('http://51.79.145.242:8585');
        setSocket(newSocket);

        return () => {
            newSocket.disconnect();
        };
        }, []);    
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
 
    const backBtn =()=>{
        setChoose(false);
        setStart(false);
        setItems([]);
    }
    const startBtn = () =>{
        
        if (!isStart) {
            setStart(true);
            setFinish(true);
            setTimer(true);
            setTime(0);
        } else {
            setStart(false);
            setFinish(true);
            if (gameState =="easy") {
                easy();
            } else if(gameState =='normal'){
                normal();
            }
            else if(gameState == 'hard'){
                hard();
            }
        }
        
    }
    useEffect(() => {
        if (isStart) {
          setText("ReSTART");
        } else {
          setText("START");
        }
      }, [isStart]);
   
    
    const easy =()=>{
        setChoose(true);
        setGameState("easy");
        setItems([
            { id: 1, img: '/img/html.png', stat: "" },
            { id: 1, img: '/img/html.png', stat: "" },
            { id: 2, img: '/img/css.png', stat: "" },
            { id: 2, img: '/img/css.png', stat: "" },
            { id: 3, img: '/img/js.png', stat: "" },
            { id: 3, img: '/img/js.png', stat: "" },
            { id: 4, img: '/img/scss.png', stat: "" },
            { id: 4, img: '/img/scss.png', stat: "" }
        ].sort(() => Math.random() - 0.5))
        setNumber(4);
    }
    const normal =()=>{
        setChoose(true);
        setGameState("normal");

        setItems([
            { id: 1, img: '/img/html.png', stat: "" },
            { id: 1, img: '/img/html.png', stat: "" },
            { id: 2, img: '/img/css.png', stat: "" },
            { id: 2, img: '/img/css.png', stat: "" },
            { id: 3, img: '/img/js.png', stat: "" },
            { id: 3, img: '/img/js.png', stat: "" },
            { id: 4, img: '/img/scss.png', stat: "" },
            { id: 4, img: '/img/scss.png', stat: "" },
            { id: 5, img: '/img/react.png', stat: "" },
            { id: 5, img: '/img/react.png', stat: "" },
            { id: 6, img: '/img/vue.png', stat: "" },
            { id: 6, img: '/img/vue.png', stat: "" }
        ].sort(() => Math.random() - 0.5))
        setNumber(6);
    }
    const hard =()=>{
        setChoose(true);
        setGameState("hard");
        setItems([
            { id: 1, img: '/img/html.png', stat: "" },
            { id: 1, img: '/img/html.png', stat: "" },
            { id: 2, img: '/img/css.png', stat: "" },
            { id: 2, img: '/img/css.png', stat: "" },
            { id: 3, img: '/img/js.png', stat: "" },
            { id: 3, img: '/img/js.png', stat: "" },
            { id: 4, img: '/img/scss.png', stat: "" },
            { id: 4, img: '/img/scss.png', stat: "" },
            { id: 5, img: '/img/react.png', stat: "" },
            { id: 5, img: '/img/react.png', stat: "" },
            { id: 6, img: '/img/vue.png', stat: "" },
            { id: 6, img: '/img/vue.png', stat: "" },
            { id: 7, img: '/img/angular.png', stat: "" },
            { id: 7, img: '/img/angular.png', stat: "" },
            { id: 8, img: '/img/nodejs.png', stat: "" },
            { id: 8, img: '/img/nodejs.png', stat: "" }
        ].sort(() => Math.random() - 0.5))
        setNumber(8);
    }




    // 檢查當前點擊的物件id是否與prev存取之id相同
    const [isClick,setClick] = useState(true);
    function check(current){
        
            if(isClick&&items[current].id == items[prev].id && items[current].stat !="active"){
                items[current].stat = "correct"
                items[prev].stat = "correct"
                setItems([...items])
                setPrev(-1);
                setNumber(puzzleNumber-1);
                if (puzzleNumber <=1) {
                    setFinish(false);
                    
                }
                
            }else if(isClick&&items[current].stat !="active"){
                items[current].stat = "wrong"
                items[prev].stat = "wrong"
                setClick(false);
                setItems([...items])
                setTimeout(() => {
                    items[current].stat = ""
                    items[prev].stat = ""
                    setItems([...items])
                    setPrev(-1)
                    setClick(true)
                }, 1000)
                
            }    
        
        
    }
    //點擊事件
    // 若第一次點擊，將prev設為當前點擊物件之ID
    // 否則調用check函數
    function handleClick(id){
        if(prev === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        }else{
            check(id)
        }
    }
    const finish =()=>{
        if (puzzleNumber <= 0) {
            console.log("finish");
            setTimer(false);
            showModal();
            const userEmail = Cookies.get("userEmail");
            socket.emit("game",[currentTime,userEmail,gameState,"memoryGame"]);
            
        }
       
    }
    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const backMenu = () => {
        setOpen(false);
        window.location.reload()

    };
    const reStart =()=>{
        setOpen(false);
        setTime(0);
        setStart(false);
        if (gameState =="easy") {
            easy();
        } else if(gameState =='normal'){
            normal();
        }
        else if(gameState == 'hard'){
            hard();
        }

    }
    
    if (isChoose) {
        return (
            <div className='cardComponent'>
                <div className='btnContainer'>
                    <div className='backBtn'>
                    <Button type="primary" onClick={backBtn} >Back</Button>
                    </div>
                    <div className='startBtn'>
                    <Button type="primary" onClick={startBtn} >{btnText}</Button>
                    </div>
                    {isStart?(
                      <div className='startBtn'>
                      <Button type="primary" disabled={isfinish} onClick={finish} >完成</Button>
                      </div>  
                    ):(
                        <div></div>
                    )}
                   
                   <Modal
                        title="恭喜你過關"
                        open={open}
                        onOk={backMenu}
                        onCancel={reStart}
                        okText="返回主選單"
                        cancelText="重來"
                    >
                        <p>共花費{currentTime}秒</p>
                    </Modal>
                </div>
                
               
                <div className="containerCard">
                    
                    {/* 利用map渲染items中的物件，item為當前的物件，index為當前物件的索引 */}
                    { items.map((item, index) => (
                        <CardIndex key={index} item={item} id={index}  state ={isStart} handleClick={handleClick} />
                    )) }
                </div>
                
            </div>
        )
        
    } else {
        return (
            <div className="buttonContainer">
            <div className="selectBtn">
            <Button
                type="primary"
                onClick={easy}
            >
                Easy
            </Button>
            </div>
            <div className="selectBtn">
            <Button
                type="primary"
                onClick={normal}
             
            >
                Normal
            </Button>
            </div>
            <div className="selectBtn">
            <Button
                type="primary"
                onClick={hard}
               
            >
                Hard
            </Button>
            </div>
        </div>
        )
        
    }

    
}

export default Cards
import  React, { useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import io from 'socket.io-client';
import Cookies from 'js-cookie';
import "./components/css/list.css";
import "../css/responsive.css";
import "./ver2.0/css/checkList.css"
import { Button,Divider, List,Steps ,Checkbox} from 'antd';
import Footer from "./ver2.0/footer";
import Headers from "./ver2.0/header";
import "./game/css/list.css";
const CheckList = () => {
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    const newSocket = io('http://51.79.145.242:8585');
      setSocket(newSocket);

      return () => {
        newSocket.disconnect();
      };
    }, []);
   
    const listPartOne ={"response":{
      "0": {
        "Q_id": 1,
        "Question": "喜歡長時間自身旋轉",
        "score": "4"
      },
      "1": {
        "Q_id": 2,
        "Question": "學會做一件簡單的事，但很快就忘記。",
        "score": "2"
      },
      "10": {
        "Q_id": 11,
        "Question": "說話不合音調、無節奏",
        "score": "4"
      },
      "11": {
        "Q_id": 12,
        "Question": "長時間搖擺身體",
        "score": "4"
      },
      "12": {
        "Q_id": 13,
        "Question": "要去拿什么東西，但又不是身體所能達到的地方（即對自身與物體的距離估計不足。",
        "score": "2"
      },
      "13": {
        "Q_id": 14,
        "Question": "對環境和日常生活規律的改變產生強烈反應",
        "score": "3"
      },
      "14": {
        "Q_id": 15,
        "Question": "當與其他人在一起時，呼喚他的名字，他沒有反應",
        "score": "2"
      },
      "15": {
        "Q_id": 16,
        "Question": "經常做出前沖、旋轉、腳尖行走、手指輕掐輕彈等動作",
        "score": "4"
      },
      "16": {
        "Q_id": 17,
        "Question": "對其他人的面部表情沒有反應",
        "score": "3"
      },
      "17": {
        "Q_id": 18,
        "Question": "說話時很少用“是”或“我”等詞",
        "score": "2"
      },
      "18": {
        "Q_id": 19,
        "Question": "有某一方面的特殊能力，似乎與智力低下不相符合",
        "score": "4"
      },
      "19": {
        "Q_id": 20,
        "Question": "不能執行簡單的含有介詞語句的指令（如把球放在盒子上或放在盒子里）",
        "score": "1"
      }
    }}
    const listPartTwo={"response":{
      "2": {
        "Q_id": 3,
        "Question": "經常沒有接觸環境或進行交往的要求。",
        "score": "4"
      },
      "20": {
        "Q_id": 21,
        "Question": "有時對很大的聲音不產生吃驚反應（可能讓人想到他是聾子）",
        "score": "3"
      },
      "21": {
        "Q_id": 22,
        "Question": "經常拍打手",
        "score": "4"
      },
      "22": {
        "Q_id": 23,
        "Question": "大發脾氣或經常發點脾氣",
        "score": "3"
      },
      "23": {
        "Q_id": 24,
        "Question": "主動回避與別人的眼光接觸",
        "score": "4"
      },
      "24": {
        "Q_id": 25,
        "Question": "拒絕別人的接觸或擁抱",
        "score": "4"
      },
      "25": {
        "Q_id": 26,
        "Question": "有時對很痛苦的刺激如摔傷、割破或注射不引起反應",
        "score": "3"
      },
      "26": {
        "Q_id": 27,
        "Question": "身體表現很僵硬、很難抱住",
        "score": "3"
      },
      "27": {
        "Q_id": 28,
        "Question": "當抱看他時，感到他的肌肉松馳（即使他不緊貼抱他的人）",
        "score": "2"
      },
      "28": {
        "Q_id": 29,
        "Question": "以姿勢、手勢表示所渴望得到的東西（而不傾向於語言表示）",
        "score": "2"
      },
      "29": {
        "Q_id": 30,
        "Question": "常用腳尖走路",
        "score": "2"
      },
      "3": {
        "Q_id": 4,
        "Question": "往往不能接受簡單的指令（如坐下、過來等",
        "score": "1"
      }
    }}
    const listPartThree={"response":{
      "30": {
        "Q_id": 31,
        "Question": "用咬人、撞人、踢人等行為傷害他人",
        "score": "2"
      },
      "31": {
        "Q_id": 32,
        "Question": "不斷地重復短句",
        "score": "3"
      },
      "32": {
        "Q_id": 33,
        "Question": "游戲時不模仿其他兒童",
        "score": "3"
      },
      "33": {
        "Q_id": 34,
        "Question": "當強光直接照射眼睛時常常不眨眼",
        "score": "1"
      },
      "34": {
        "Q_id": 35,
        "Question": "以撞頭、咬手等行為自傷",
        "score": "2"
      },
      "35": {
        "Q_id": 36,
        "Question": "想要什么東西不能等待（一想要什么，就馬上要得到）",
        "score": "2"
      },
      "36": {
        "Q_id": 37,
        "Question": "不能指出5個以上物體的名稱",
        "score": "1"
      },
      "37": {
        "Q_id": 38,
        "Question": "不能發展任何友誼（不會和小朋友來往交朋友）",
        "score": "4"
      },
      "38": {
        "Q_id": 39,
        "Question": "有許多聲音的時候，常常捂著耳朵",
        "score": "4"
      },
      "39": {
        "Q_id": 40,
        "Question": "經常旋轉碰撞物體",
        "score": "4"
      },
      "4": {
        "Q_id": 5,
        "Question": "不會玩玩具（如沒完沒了地轉動、亂扔、揉等）",
        "score": "2"
      },
      "40": {
        "Q_id": 41,
        "Question": "在訓練大小便方面有困難（不會控制大小便）",
        "score": "1"
      }
    }}
    const listPartFore={"response":{
      "41": {
        "Q_id": 42,
        "Question": "一天只能提出5個以內的要求",
        "score": "2"
      },
      "42": {
        "Q_id": 43,
        "Question": "經常受到驚嚇或非常焦慮不安",
        "score": "3"
      },
      "43": {
        "Q_id": 44,
        "Question": "在正常光線下斜眼、閉眼、皺眉",
        "score": "3"
      },
      "44": {
        "Q_id": 45,
        "Question": "不是經常被幫助的話，不會自己給自己穿衣",
        "score": "1"
      },
      "45": {
        "Q_id": 46,
        "Question": "一遍遍重復一些聲音或詞",
        "score": "3"
      },
      "46": {
        "Q_id": 47,
        "Question": "瞪著眼看人，好像要看穿似的",
        "score": "4"
      },
      "47": {
        "Q_id": 48,
        "Question": "重復別人的問話或回答",
        "score": "4"
      },
      "48": {
        "Q_id": 49,
        "Question": "經常不能意識所處的環境，并且可能對危險的環境不在意",
        "score": "2"
      },
      "49": {
        "Q_id": 50,
        "Question": "特別喜歡擺弄、著迷於單調的東西或游戲、活動等（如來回地走或跑，沒完沒了地蹦、跳、拍、敲）",
        "score": "4"
      },
      "5": {
        "Q_id": 6,
        "Question": "視覺辨別能力差（如對一種物體的特徵、大小、顏色、位置等辨別能力差）。",
        "score": "2"
      },
      "50": {
        "Q_id": 51,
        "Question": "對周圍東西喜歡嗅、摸或嘗",
        "score": "3"
      },
      "51": {
        "Q_id": 52,
        "Question": "對生人常無視覺反應（對來人不看）",
        "score": "3"
      }
    }}
    const listPartFive ={"response": {
        "52": {
          "Q_id": 53,
          "Question": "糾纏在一些復雜的儀式行為上，就像纏在魔圈里（如走路要走一定的路線，飯前或做什么事前一定要把什么東西擺在什么位置，或做什么動作，否則就不睡不吃。",
          "score": "4"
        },
        "53": {
          "Q_id": 54,
          "Question": "經常毀壞東西（如玩具、家里的一切用具很快就給弄壞了）",
          "score": "2"
        },
        "54": {
          "Q_id": 55,
          "Question": "在2歲以前就發現孩子發育延遲",
          "score": "1"
        },
        "55": {
          "Q_id": 56,
          "Question": "在日常生活中至少用15個但不超過30個短句進行交往（不到15句也打“V”",
          "score": "3"
        },
        "56": {
          "Q_id": 57,
          "Question": "長時間疑視一個地方(呆呆地看一處)",
          "score": "4"
        },
        "6": {
          "Q_id": 7,
          "Question": "無交往性微笑（即不會與人點頭、招呼、微笑）",
          "score": "2"
        },
        "7": {
          "Q_id": 8,
          "Question": "代詞運用顛倒或混亂（你、我分不清)",
          "score": "3"
        },
        "8": {
          "Q_id": 9,
          "Question": "長時間總拿著某種東西。",
          "score": "3"
        },
        "9": {
          "Q_id": 10,
          "Question": "似乎不在聽人說話，以至讓人懷疑他有聽力問題",
          "score": "3"
        }
      }}

    
    const [checklist , setChecklist]=useState(Object.values(listPartOne.response).map((item) => item.Question));
    const [checkedList, setCheckedList] = useState([]);
    const [checkedItems, setCheckedItems] = useState({});
    const onChange = (e) => {
        console.log(checkedItems);
        if (e.target.checked) {
          setCheckedList([...checkedList, e.target.value]);
          setCheckedItems({ ...checkedItems, [e.target.value]: true });
        } else {
        // checkedList 狀態陣列中刪除該值 e.target.value，使用 filter 方法來過濾該值，以獲得一個新的不包含該值的陣列。
          setCheckedList(checkedList.filter((item) => item !== e.target.value));
          //以字典的形式存取應元素是否被勾選
          setCheckedItems({ ...checkedItems, [e.target.value]: false });
        }
      };

    const questionArr =[listPartTwo,listPartThree,listPartFore,listPartFive];
    const [loadings, setLoadings] = useState([]);
    const [checkCount ,setCount] =useState(0);
    const [btnText,setText] = useState("下一頁");
    const navigate = useNavigate();
    const enterLoading = (index) => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = true;
        return newLoadings;
      });
      setTimeout(() => {
        setLoadings((prevLoadings) => {
          const newLoadings = [...prevLoadings];
          newLoadings[index] = false;
          return newLoadings;
        });
      }, 1000);
      setCheckedItems({});
      if (checkCount <4) {
        setCount(checkCount + 1);
        //Object.values先呼叫需要的元素，在用.map的方式將元素下的資料取出
        setChecklist(Object.values(questionArr[checkCount].response).map((item) => item.Question))
        
        if (checkCount == 3) {
           setText("提交");
        }
      } else {
        console.log("finish");

        console.log(Cookies.get('userEmail'));
        const userEmail = Cookies.get("userEmail");
        socket.emit("score",[checkedList,userEmail]);
        Cookies.remove('hasScore');
        Cookies.set("hasScore",true,{expires:7});
        console.log(Cookies.get("hasScore"));
        navigate('/');
       
      }
     

    }; 
  
  return(
      <main className="main-layout inner_page">
      <Headers/>
      <div className="titleList">
         <span className="text">狀況檢測量表</span>
      </div>
      <Divider orientation="left">狀況檢測量表</Divider>
      <div className="checkList" style={{ display: "flex",padding:"30px" }}>
        <div className="steps">
        <Steps style={{width:"auto%" ,height:"100%"}}
              progressDot
              current={checkCount}
              direction="vertical"
            
              items={[
                  {
                  
                  title: '為了提供更好的分析',
                  description: '麻煩您耐心填寫',
                  
                  },
                  {
                  title: '已經完成了 30% 的填寫囉',
                  description: '讓我們一起繼續前進吧！',
                  },
                  {
                  title: '已經走過一半的路程，繼續加油！',
                  description: '50%的進度讓人振奮，繼續保持下去！',
                  },
                  {
                  title: '已經完成了80%，離完成就差一點了',
                  description: '只差一點就可以看到完整的結果了',
                  },
                  {
                  title: '就快完成囉！',
                  description: '期待為您提供精確的檢測結果！',
                  },
              ]}
              
              />
            </div>
          <div className="list">
            <List style={{width:"100%"}}
            size="large"
            header={<div>共57題</div>}
            footer={
            <div>
              <Button type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}>
              {btnText}
              </Button>
            </div>}
            bordered
            dataSource={checklist}
            
            renderItem={(item) => 
            <List.Item>
                {/* checked以讀取 checkedItems中key為item的value來決定是否被啟用*/}
                <Checkbox  checked={checkedItems[item]} style={{ fontSize: "18px"}}  onChange={onChange} value={item} >{item}</Checkbox>
            </List.Item>}
            />
           </div>
      </div>

  </main>
  )
}
export default CheckList;
import React, { useEffect,useState } from 'react';
import { PieChart, Pie,Label,LineChart, Line,Legend, Tooltip, Bar,BarChart,CartesianGrid,Radar,XAxis,YAxis, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis} from 'recharts';
import { MailOutlined, SettingOutlined ,AppstoreOutlined,LikeOutlined} from '@ant-design/icons';
import { Menu,Col, Row, Statistic } from 'antd';
import Footer from "./ver2.0/footer";
import Headers from "./ver2.0/header";
import io from 'socket.io-client';
import Cookies from 'js-cookie';
import "./ver2.0/css/chart.css"


const Dashboard = () => {
const [socket, setSocket] = useState(null);

const [message ,setMessage] = useState([]);
const [score,setScore] = useState([]);
const [relativeScore , setRelativeScore] = useState();
const [memoryData, setMemory] =useState();
const [storyData,setStory] = useState();
const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        const handleResize = () => {
            setSize({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener('resize', handleResize);

        // 清理函数
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
  useEffect(() => {
    const newSocket = io('http://51.79.145.242:8585');
    setSocket(newSocket);
    const data = Cookies.get('userEmail');
    newSocket.emit('dashboard', data);
    newSocket.on('response', (data) => {
      const userEmail = Cookies.get("userEmail");
      if (userEmail == data.message[5]) {
        setMessage(data.message[0]);
        setScore(data.message[1]);
        setRelativeScore(data.message[2]);
        setMemory(data.message[3]);
        setStory(data.message[4]);
      }
      


  });
    return () => {
        newSocket.disconnect();
    };
    }, []);
    const [data,setData] = useState();
    useEffect(()=>{
      setData([
        {
          subject: '名詞',
          A: message[1],
          fullMark: 100,
        },
        {
          subject: '代詞',
          A: message[2],
         
          fullMark: 100,
        },
        {
          subject: '動詞',
          A: message[3],
         
          fullMark: 100,
        },
        {
          subject: '形容詞',
          A: message[4],
         
          fullMark: 100,
        },
        {
          subject: '副詞',
          A: message[5],
          
          fullMark: 100,
        },
        {
          subject: '介系詞',
          A: message[6],
          fullMark: 100,
        },
      ])
    },[message])
    
  
    
  return(
    <>
    <div className='chartBody'>
    <Headers/>
   
      <div className="chartContainer">
                
                
           
        <div className='all'>
            <div className='chartCardMin'>
              <Statistic title="預計達成" value={"小於31分"} prefix={<LikeOutlined />} />
            </div>
            <div className='chartCardMin'>
              <Statistic title="目前分數" value={relativeScore} suffix="/ 158分" />
            </div>
            <div className='chartCardMin'>
              <div className='alert'><span >更多圖表請使用電腦觀看</span></div>
            </div>
            <div className='chartCard'>
              <Statistic title="預計達成" value={"小於31分"} prefix={<LikeOutlined />} />
            </div>
            <div className='chartCard'>
              <Statistic title="目前分數" value={relativeScore} suffix="/ 158分" />
            </div>
          <div className='chartCard'>
            <div className='content'>
              <RadarChart outerRadius={90} width={size.width/4} height={250} data={data}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="subject" />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} />
                      <Radar name="各詞性使用頻率" dataKey="A" stroke="#8884d8" fill="#8884d8"fillOpacity ={0.6} />
                      <Legend />
              </RadarChart>
            </div>
          </div>
          <div className='chartCard'>
            <div className='content'>
              <BarChart width={size.width/4} height={250} data={score}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 158]} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="檢測量表分數" fill="#8884d8" />
              </BarChart>
              
            </div>
          </div>
          
          <div className='chartCard'>
            <div className='content'>
              <BarChart width={size.width/4} height={250} data={storyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 158]} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="看圖說故事總花費時間" fill="#F19483" />
                </BarChart>
              </div>
          </div>
          <div className='chartCard'>
            <div className='content'>
              <LineChart width={size.width/4} height={300} data={memoryData}>
                <CartesianGrid  strokeDasharray="3 3" />
                <XAxis  dataKey="date" padding={{ left: 30, right: 30 }} >
                  <Label value="翻牌遊戲花費時間：單位秒" offset={250} position="insideBottom" />
                </XAxis>
                <YAxis />
                
                <Tooltip />
                
                <Legend />
                <Line type="monotone" dataKey="easy" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="normal" stroke="#82ca9d" />
                <Line type="monotone" dataKey="hard" stroke="#64363C" />
                
              </LineChart>
            </div>
          </div>
        </div>
      </div>
  <Footer/>
  </div>

</>
    

  )
}
export default Dashboard;
import React, { useEffect,useState } from 'react';
import { PieChart, Pie,Label,LineChart, Line,Legend, Tooltip, Bar,BarChart,CartesianGrid,Radar,XAxis,YAxis, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis} from 'recharts';
import { MailOutlined, SettingOutlined ,AppstoreOutlined,LikeOutlined} from '@ant-design/icons';
import { Menu,Col, Row, Statistic } from 'antd';
import "../css/style.css";
import "../css/responsive.css";
import Footer from "./footer";
import Headers from "./header";
import io from 'socket.io-client';
import Cookies from 'js-cookie';



// function getItem(label, key, icon, children, type) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     type,
//   };
// }
// const items = [
//   getItem('Navigation One', 'sub1', <MailOutlined />, [
//     getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
//     getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
//   ]),
//   getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
//     getItem('Option 5', '5'),
//     getItem('Option 6', '6'),
//     getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
//   ]),
//   {
//     type: 'divider',
//   },
//   getItem('Navigation Three', 'sub4', <SettingOutlined />, [
//     getItem('Option 9', '9'),
//     getItem('Option 10', '10'),
//     getItem('Option 11', '11'),
//     getItem('Option 12', '12'),
//   ]),
//   getItem('Group', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')], 'group'),
// ];


const Dashboard = () => {
    
//     socket.emit("score",[checkedList,userEmail]);
const [socket, setSocket] = useState(null);

const [message ,setMessage] = useState([]);
const [score,setScore] = useState([]);
const [relativeScore , setRelativeScore] = useState();
const [memoryData, setMemory] =useState();
const [storyData,setStory] = useState();
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
  <div className="container" style={{display:"inline-flex"}}>
    <div className='all' style={{ display: "flex", flexDirection: "row",justifyContent:'flex-end' }}>
     
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="chart-container" style={{ display: "flex", flexDirection: "row" }}>
          
          <div className='radarChar'>
            <RadarChart outerRadius={90} width={400} height={250} data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Radar name="各詞性使用頻率" dataKey="A" stroke="#8884d8" fill="#8884d8"fillOpacity ={0.6} />
              <Legend />
            </RadarChart>
          </div>
          <div className='pirChar' style={{width: "100%" , position:"relative",top:"40%"}}>
              <Row gutter={16}>
              <Col span={12}>
                <Statistic title="預計達成" value={"小於31分"} prefix={<LikeOutlined />} />
              </Col>
              <Col span={12}>
                <Statistic title="目前分數" value={relativeScore} suffix="/ 158分" />
              </Col>
            </Row>
          </div>

        </div>

        <div className="chart-container" style={{ display: "flex", flexDirection: "column" }}>
          <div className='barChar'>
            <BarChart width={730} height={250} data={score}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 158]} />
              <Tooltip />
              <Legend />
              <Bar dataKey="檢測量表分數" fill="#8884d8" />
            </BarChart>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{marginBottom:"20px"}}>
        <LineChart width={500} height={300} data={memoryData}>
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
          <div className="chart-container" style={{ display: "flex", flexDirection: "column" }}>
          <div className='barChar'>
            <BarChart width={730} height={250} data={storyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 158]} />
              <Tooltip />
              <Legend />
              <Bar dataKey="看圖說故事總花費時間" fill="#F19483" />
            </BarChart>
          </div>
        </div>
          
        </div>
    </div>
  </div>
  <Footer/>
</div>


    {/* <!-- footer --> */}
    
  </main>
  )
}
export default Dashboard;
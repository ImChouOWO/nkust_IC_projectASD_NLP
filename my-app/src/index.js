import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/Login';
import NotFound from './pages/notFound';
import ChatRoom from './pages/chatRoom';
import GamePage from './pages/gamePage';
import CheckList from './pages/checkList';
import Dashboard from './pages/dashboard';

import ASD from './pages/ver2.0/aboutASD';
import MainPage from './pages/ver2.0/mianPage';
import About from './pages/ver2.0/about';
import MainFunction from './pages/ver2.0/mainFunction';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/aboutASD" element={<ASD />} />
                <Route path="/login" element={<Login />} />
                <Route path ='/mainFunction' element={<MainFunction/>}/>
                <Route path='/chatRoom' element={<ChatRoom/>} />
                <Route path='/game' element={<GamePage/>} />
                <Route path='/checkList' element={<CheckList/>} />
                <Route path ='/dashboard' element={<Dashboard/>}/> 
                <Route path="*" element={<NotFound />} />
              </Routes>       
      </Router>
  </React.StrictMode>
);



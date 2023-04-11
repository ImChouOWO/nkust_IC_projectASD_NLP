import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/Login';
import About from './pages/about';
import HeaderWebFunction from './pages/HeaderWebFunction';
import MainPage from './pages/mainPage';
import MainFunction01 from "./pages/HeaderMainFunction01";
import NotFound from './pages/notFound';
import ChatRoom from './pages/chatRoom';
import Register from './pages/register';
import GamePage from './pages/gamePage';
import CheckList from './pages/checkList';
import Dashboard from './pages/dashboard';

import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/mainFunction" element={<MainFunction01 />} />
                <Route path="/aboutASD" element={<HeaderWebFunction />} />
                <Route path="/login" element={<Login />} />
                <Route path='/chatRoom' element={<ChatRoom/>} />
                <Route path='/register' element={<Register/>} />
                <Route path='/game' element={<GamePage/>} />
                <Route path='/checkList' element={<CheckList/>} />
                <Route path ='/dashboard' element={<Dashboard/>}/>
                <Route path="*" element={<NotFound />} />
              </Routes>       
      </Router>
  </React.StrictMode>
);



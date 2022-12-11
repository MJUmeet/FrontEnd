import React, {useState} from 'react';
import MainPage from './routes/MainPage';
//import SignupPage from './routes/SignupPage'
import LoginPage from './routes/LoginPage';
import SignupPage from './routes/SignupPage';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import MyPage from './routes/MyPage';
import AddRoom from './components/AddRoom';
import EnterRoom from './routes/EnterRoom';
import InRoomPage from './routes/InRoomPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/mainPage" element={<MainPage />} />
        <Route path="/setting" element={<MyPage />} />
        <Route path="/addRoom" element={<AddRoom />} />
        <Route path="/enterRoom" element={<EnterRoom />} />
        <Route path="/room/:id" element={<InRoomPage />} />
      </Routes>
    </div>
  );
}

export default App;

import React, { useState } from 'react'
import MainPage from './routes/MainPage'
//import SignupPage from './routes/SignupPage'
import LoginPage from './routes/LoginPage'
import './App.css'
import {Routes, Route} from "react-router-dom"
import MyPage from './routes/MyPage'
import AddRoom from './components/AddRoom'
import EnterRoom from './routes/EnterRoom'
import InRoomPage from './routes/InRoomPage'
import SignupPage from './routes/SignupPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Routes>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/mainPage' element={<MainPage/>}/>
      <Route path='/setting' element={<MyPage/>}/>
      <Route path="/addRoom" element={<AddRoom/>}/>
      <Route path="/enterRoom" element={<EnterRoom/>}/>
      <Route path='/room' element={<InRoomPage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
     </Routes>
    </div>
  )
}

export default App

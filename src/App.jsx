import React, { useState } from 'react'
import MainPage from './routes/MainPage'
//import SignupPage from './routes/SignupPage'
import LoginPage from './routes/LoginPage'
import './App.css'
import {Routes, Route} from "react-router-dom"
import MyPage from './routes/MyPage'
import AddRoom from './components/AddRoom'
import EnterRoom from './routes/EnterRoom'

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
     </Routes>
    </div>
  )
}

export default App

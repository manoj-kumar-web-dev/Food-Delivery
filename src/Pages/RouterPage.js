import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import Header from '../Components/layout/Header';
import LandingPage from './LandingPage';
import SignupPage from './Signup';
function RouterPage() {
  return (
    <div>
        <Header/>
 <BrowserRouter>
   <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/' element={<LandingPage />}/>
    <Route path='/Signup' element={<SignupPage/>}/>
   
   </Routes>
   </BrowserRouter>
    </div>
  )
}

export default RouterPage
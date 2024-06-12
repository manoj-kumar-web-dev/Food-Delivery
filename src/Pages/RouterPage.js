import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import Header from '../Components/layout/Header';
import LandingPage from './LandingPage';
import SignupPage from './Signup';
import Login from './Login';



function RouterPage() {
  return (
    <div>    
 <BrowserRouter>
   <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/' element={<LandingPage />}/>
    <Route path='/Signup' element={<SignupPage/>}/>
    <Route path='/Signin' element={<Login/>}/>
   
   </Routes>
   </BrowserRouter>
    </div>
  )
}

export default RouterPage
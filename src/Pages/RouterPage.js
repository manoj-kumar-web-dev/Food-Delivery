import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import Header from '../Components/layout/Header';
import LandingPage from './LandingPage';
function RouterPage() {
  return (
    <div>
        <Header/>
 <BrowserRouter>
   <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/' element={<LandingPage />}/>
    
   
   </Routes>
   </BrowserRouter>
    </div>
  )
}

export default RouterPage
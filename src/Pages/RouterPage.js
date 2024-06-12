import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import Header from '../Components/layout/Header';
function RouterPage() {
  return (
    <div>
        <Header/>
 <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    
   
   </Routes>
   </BrowserRouter>
    </div>
  )
}

export default RouterPage
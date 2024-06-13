import React from 'react'
import Header from '../Components/layout/Header'
import img  from '../Assets/image.png'
import '../Styles/global.css'
import { Button } from 'antd'


function LandingPage() {
  return (
    <div className='landing_hero'>
      <Header/>
      <div style={{display:"flex",}}>

      <div>
      <h3 className='biryani_text' >Biryani</h3>
      <h3 className='biryani_text1'> We All Love</h3>
      <button className='homebutton'>View More</button>
      </div>

      <div className='hero' >
     <img src={img} alt='biryani' className='home_logo' />
      </div>

      </div>
     </div>
  )
}

export default LandingPage
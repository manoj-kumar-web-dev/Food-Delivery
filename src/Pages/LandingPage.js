import React from 'react'
import Header from '../Components/layout/Header'
import img  from '../Assets/image.png'
import '../Styles/global.css'
import { Button } from 'react-bootstrap'

function LandingPage() {
  return (
    <div style={{backgroundColor:"#D6EAF5",height:"500px"}}>
      <Header/>
      <div style={{display:"flex",}}>

      <div>
      <h3 className='biryani_text' >Biryani</h3>
      <h3 className='biryani_text1'> We All Love</h3>

      <Button className='homebutton'>View More</Button>
      </div>

      <div className='hero' >
     <img src={img} alt='biryani' className='home_logo' />
      </div>

      </div>
     </div>
  )
}

export default LandingPage
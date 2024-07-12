import React from 'react'
import logo from '../images/footer.svg'

function Footer() {
  return (
    <>
        <div className='footer' style={{background: "#ffff"}}>
        <img src={logo} width={435.29} height={87} />
        <p className='footer_text'>Be the first to find out about discounts and more</p>
        <div className='input-email'>
            <input type="text"  placeholder='enter your email'/>
            <button className='subscribe-btn'>Subscribe</button>
        </div>
     
    </div>
    <div className='copywrite'>
        <div >
        <a href='#'>Shop all</a>
        <a href='#'>Back to School</a>
        <a href='#'>About </a>
        </div>
        <p>Terms & Privacy. 2024 Aurelius. All right reserved</p>
        <div>
            <a href='#'>Instagram</a>
            <a href='#'>Tiktok</a>
            <a href='#'>Contact</a>
         </div>
    </div>
    
    </> 
  )
}

export default Footer


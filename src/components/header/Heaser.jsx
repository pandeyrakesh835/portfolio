import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../img/myimg.jpg'
import HearderSocial from './HearderSocial'


const Heaser = () => {
  return (
    <header>
        <div className="container hearder_container">
            <h5>Hello I'm</h5>
            <h1>Rakesh Pandey</h1>
            <h5 className='text-light'>Fullstack Devoloper</h5>
            <CTA/>
            <HearderSocial/>
            <div className='me'>
                <img src={ME} alt="me" className='img'/>
            </div>
            <a href='#contact' className='scroll_down' >Scroll Down</a>
        </div>
    </header>
  )
}

export default Heaser
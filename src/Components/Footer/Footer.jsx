import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import instagram_icon from '../Assets/instagram_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <image src={footer_logo} alt=""/>
        <p>SHOPPER</p>

      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>

      </ul>
      <div className='footer-social-icon'>
        <div className='footer-icons-container'>
        <image src={instagram_icon} alt=""/>
        </div>
        <div className='footer-icons-container'>
        <image src={pintester_icon} alt=""/>
        </div>
        <div className='footer-icons-container'>
        <image src={whatsapp_icon} alt=""/>
        </div>
      </div>
      <div className='footer-copyright'></div>
      <hr/>
      <p>Copyright @2023-All Right Reserved.</p>
    </div>
  )
}

export default Footer
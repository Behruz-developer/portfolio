import React from 'react'
import { LiaTelegramPlane } from "react-icons/lia";
import { AiOutlineMail } from "react-icons/ai";
import { LuPhoneCall } from "react-icons/lu";

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className="container">
          <div className="footer_box">
            <ul className="footer_list">
              <li><a href="#!" className="footer_link">Ishlarim</a></li>
              <li><a href="#!" className="footer_link">Blog</a></li>
              <li><a href="#!" className="footer_link">Men Haqimda</a></li>
              <li><a href="#!" className="footer_link">Dasturchilar Uchun</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer2">
        <div className="container">
          <div className="footer2_box">
            <p className="footer2_text">© 2021 — 2021 Developer.com  |  Barcha huquqlar himoyalangan.</p>
            <div className="footer2_card_icons">
              <LiaTelegramPlane  className='footer2_icon'/>
              <AiOutlineMail  className='footer2_icon'/>
              <LuPhoneCall  className='footer2_icon'/>
            </div>
          </div>
        </div>

      </div>
    </>

  )
}

export default Footer
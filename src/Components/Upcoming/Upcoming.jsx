import React from 'react'
import upcoming_avatar from '../../assets/images/avatar 1.png'
const Upcoming = () => {
  return (
    <div className='upcoming'>
      <div className="container">
        <div className="upcoming_box">
          <img src={upcoming_avatar} alt="" className="upcoming_image" />
          <div className="upcoming_card">
            <h2 className="upcoming_card_title">Sodiqjonov Behruz <br /> Portfoliosi</h2>
            <p className="upcoming_card_text">2 yillik tarjibaga ega Frontend dasturchi. Men biznesingizdagi real muammolarni hal qiluvchi saytlar Frontendini ishlab chiqaman.</p>
            <a href='#!' className="upcoming_card_btn">Ishga yollash</a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Upcoming
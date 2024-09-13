import React, { useMemo, useState } from 'react'
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import logo from '../../assets/images/logo.png'
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const [active, setActive] = useState(false)

  const links = [
    { url: "/", name: 'Ishlarim' },
    { url: "/block_posts", name: 'Blog' },
    { url: "/about", name: 'Men Haqimda' }
  ];

  return (
    <nav className='nav'>
      <div className="container">
        <div className="nav_box">
          <a href="#!" className="nav_logo">
            <img src={logo} alt="" />
          </a>
          <FiMenu className='nav_menu' onClick={() => setActive(true)} />
          <ul className={`nav_list ${active && 'active'}`}>
            <MdClose className='nav_close' onClick={() => setActive(false)} />

            {
              links.map(obj => (
                <NavLink key={obj.name} className="nav_link" to={obj.url}>{obj.name}</NavLink>
              ))
            } 
          </ul>
        </div>
      </div> 
    </nav>
  )
}

export default Nav
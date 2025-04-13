import React, { useState } from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from "react-outside-click-handler"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const getMenuStyles = (menuOpen) => {
    if (document.documentElement.clientWidth <= 800){
      return {right: !menuOpen && '-100%'}
    }
  }
  return (

    <section className="h-wrapper">
        <div className="paddings innerWidth flexCenter h-container">
            <img className='logo' src="./logo.png" alt="logo"  width={100}/>

            <OutsideClickHandler
            onOutsideClick={() => setMenuOpen(false)}>
            <div className="h-menu flexCenter"
            style={getMenuStyles(menuOpen)}
            >
                <a href="">Residencies</a>
                <a href="">Our Values</a>
                <a href="">Contact Us</a>
                <a href="">Get Started</a>
                <button className="button">
                    <a href="">Contact</a>
                </button>
            </div>
            </OutsideClickHandler>
            <div className="menu-icon" onClick={() => setMenuOpen((prev) => !prev)}>
          <BiMenuAltRight size={30}/>
        </div>
        </div>
    </section>
  )
}

export default Header
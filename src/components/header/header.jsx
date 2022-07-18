import React from 'react'
import './header.css'
import Talk from './Talk.jsx';
import HeaderSocial from './HeaderSocial';
import TypingHeader from './TypingHeader';


const header = () => {
  return (
    <header>
      <div className="container header__container">
        <TypingHeader />
        <Talk />
        <HeaderSocial />
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header
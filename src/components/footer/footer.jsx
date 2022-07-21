import React from 'react'
import './footer.css'

const footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Meet Joshi</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>   

      <div className="footer__copyright">
        <small> &copy; Meet Joshi - I am the rights :D - Whatchu gonna do about it eh? :D</small>
        </div>     
    </footer>
  )
}

export default footer
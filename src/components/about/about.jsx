import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'


const about = () => {
  return (
    <section id="about">
      <h5>Get to know </h5>
      <h2>About me</h2>

      <div className="container about__container">
       
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h3>experience</h3>
              <small>Web Developer - Cloud Engineer</small>
            </article>
            <p>
              Hello, I am Joshi working as Fullstack Developer at Battron GmbH.
              </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default about
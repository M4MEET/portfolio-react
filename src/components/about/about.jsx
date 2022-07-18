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
              <small>born to code bitch!</small>
            </article>
            <p>
              Hello, I am Joshi working as Shopware/Web Developer at Battron GmbH. 
              Shopware is e-commerce platform which uses various frontend and backend technologies to have better expericen for online shop. and bla bla blaaa
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default about
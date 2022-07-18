import React from 'react'
import './contact.css'
import {MdMarkEmailRead} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_orakyxt', 'template_giueoqm', form.current, '5DDT4oXbZJsu1sszv')
    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Drop your Humour </h5>
      <h5>Or Share your Spotify Playlist </h5>

      <h2>@</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdMarkEmailRead className='contact__option-icon' />
            <h3>Email</h3>
            <a href="mailto:imeetjoshi@gmail.com">send</a>
          </article>
        </div>

        {/* end of the contact option */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Name' required/>
          <input type="email" name="email" placeholder='Email' required/>
          <textarea name='message' rows="7" placeholder="yes, you are weirdo..." required/> 
          <button type="submit" className='btn btn-primary'>Fuck yeah !</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
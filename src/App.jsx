import React  from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Loading from './components/loading/Loading'
import { useState, useEffect } from "react";

function App() {
    const  [loading, setLoading] = useState(false)
      useEffect(() => {
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
        }, 2000)
      },[])
  return (
    
    loading ? 
      <>
        <Loading /> 
      </>
          : 
      <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Contact />
        <Footer />
      </>
          
)
}

export default App
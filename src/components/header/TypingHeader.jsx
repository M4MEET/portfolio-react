import React from 'react'
import Typical from 'react-typical' 

const TypingHeader = () => {
    
  return (
      <div>
        <h1>Hello I'm</h1>
        <h3>
            <Typical loop={Infinity}  steps={['Meet Joshi', 1000, 'Fullstack Developer',1000]} ></Typical>
        </h3>
      </div>
  )
}

export default TypingHeader
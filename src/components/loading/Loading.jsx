import React from 'react'
import RingLoader from "react-spinners/RingLoader";
import './loading.css'
function Loading() {
  return (
    <div className='app-load'>
          <RingLoader size={400} color={"var(--color-primary)"} ></RingLoader>
    </div>
)
}
export default Loading

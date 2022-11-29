import React from 'react'
import pagenotfound from './pagenotfound.jpg'

export default function () {
    window.scrollTo(0,40);
  return (
    <div>
        <img src={pagenotfound} alt='Page Not Found'/>
    </div>
  )
}

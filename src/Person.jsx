import React from 'react'
import Photo from './images/content-4.jpg'

function Person() {
  return (
    <div className="pesron position-relative mt-5">
         <img src={Photo} alt="" width='100%'  height="500vh" class=""/>
      <div class="prime_container position-absolute top-50 start-50 translate-middle  text-center" >
         <h3>THE PRIME <br/>AMBASSADOR</h3>
         <p className='collection'>EXPLORE COLLECTION</p>
      </div>
      
    </div>
  )
}

export default Person

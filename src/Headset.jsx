import React from 'react'
import Headsetphone from './images/content-2.jpg'

function Headset() {
  return (
    <div class="container mt-5">
      <div class="row ">
        <div class="col co_container " >
           <img src={Headsetphone} alt="" width="100%"  height="100%"/>
        </div>
        <div class="col co_container" >
           <h6 className='font-head  mt-5'>ALL-IN-ONE VR</h6>
           <h1  className='font1-head'>Always ready when  <br/>yor are</h1>
           <p  class='fw-normal'>Oculus Go is all-in-one VR headset that's <br/>poratable and easy to use.Experience  <br/>entertainment on the go eith no PC, wires or <br/> hassels.</p>
        </div>
      </div>
    </div>
  )
}
export default Headset

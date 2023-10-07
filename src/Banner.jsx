import React from 'react'
import Banner1 from './images/banner-1.jpg'
import Banner2 from './images/banner-2.jpg'
import Banner3 from './images/banner-3.jpg'
// css styles
import './Css-styles/Watch.css';


function Banner() {
  return (
    <div>

<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
      {/*buttons  */}
       <div class="carousel-inner">
     <div class="carousel-indicators" >
    <button type="button" data-bs-target="#carouselExampleCaptions " data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions " data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions " data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
     
      {/*  */}
 
    <div class="carousel-item active position-relative">
      <img src={Banner1} class="d-block " alt="..." width="100%" height="500vh"/>
      {/*  */}
      <div className='position-absolute top-50 start-0 translate-middle-y watch-main'>
        <p class="fs-2">Effortlessly cool, for<br/> the traditionalists of<br/> today</p>
        <a href="#" class="fs-6 fw-bolder text-decoration-none">EXPLORE COLLECTION</a>
      </div>
      {/*  */}
    </div>
    <div class="carousel-item position-relative">
      <img src={Banner2} class="d-block w-60  " alt="..." width="100%" height="500vh"/>
      {/*  */}
      <div className='position-absolute top-50 start-0 translate-middle-y watch-main'>
        <p class="fs-2">Effortlessly cool, for<br/> the traditionalists of<br/> today</p>
        <a href="#" class="fs-6 fw-bolder text-decoration-none">EXPLORE COLLECTION</a>
      </div>
      {/*  */}
    </div>
    <div class="carousel-item position-relative">
      <img src={Banner3} class="d-block w-60  " alt="..." width="100%" height="500vh"/>
      {/*  */}
      <div className='position-absolute top-50 start-0 translate-middle-y watch-main'>
        <p class="fs-2">Effortlessly cool, for<br/> the traditionalists of<br/> today</p>
        <a href="#" class="fs-6 fw-bolder text-decoration-none">EXPLORE COLLECTION</a>
      </div>
      {/*  */}
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
    <span class="visually-hidden">Next</span>
  </button>
</div>
  
   </div>
  )
}

export default Banner;

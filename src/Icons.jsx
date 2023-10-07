import React from 'react'
import './Css-styles/Watch.css';


function Icons() {
  return (
   <div>
       <div className='container mt-5'>
            <div className='row  gx-5'>
                <div className=' col-md-4'>
                    <div className=' card icon-border text-center '>
                       <div className='row mt-4'>
                        <div className='col'>
                          <i class=" car fa-solid fa-truck-fast fa-2xl" ></i>
                          <h5 class="card-title fw-bold  mt-4" >Two-hour delivery</h5>
                          <p class="card-text">Available in most metros on selected in-stock <br/>product</p>
                          <a href="#" class="card-link fw-bolder">LEARN MORE</a>
                        </div>
                       </div>
                    </div>
                </div>
                {/*  */}
                <div className=' col-md-4'>
                    <div className='card icon-border text-center '>
                       <div className='row mt-4'>
                        <div className='col'>
                           <i class="car fa-solid fa-message fa-2xl"></i>
                           <h5 class="card-title fw-bold  mt-4">Two-hour delivery</h5>
                           <p class="card-text">Have a question? Call a Specialists or chat online<br/>for help</p>
                           <a href="#" class="card-link fw-bolder">LEARN MORE</a>
                        </div>
                       </div>
                    </div>
                </div>
                {/*  */}
                <div className=' col-md-4'>
                    <div className='card icon-border text-center '>
                       <div className='row mt-4'>
                        <div className='col '>
                        <i class=" car fa-solid fa-percent fa-2xl"></i>
                          <h5 class="card-title fw-bold  mt-4">Two-hour delivery</h5>
                          <p class="card-text">Get 3% Daily Cash with sprcial financing offers<br/> from us</p>
                          <a href="#" class="card-link fw-bolder">LEARN MORE</a>
                        </div>
                       </div>
                    </div>
                </div>
               
                {/*  */}
               
                {/*  */}
                


            </div>
        </div>
   </div>

  )
}

export default Icons;

import React from 'react'
import watch from './images/product-1.jpg'

function Watches() {
  return (
    <div>
       <div className='container mt-5'>
            <div className='row  gx-5'>
                <div className=' col-md-6'>
                    <div className=' card watch-border text-center '>
                       <div className='row mt-4'>
                        <div className='col'>
                           
                           <div class=" position-relative "><img src={watch} alt="" width="80%"/></div>
                           <div class=" backcolor position-absolute bottom-0 start-50 translate-middle-x " >
                              <h6 class="mt-3">Metro 38 Date</h6>
                              <p style={{fontSize:"11px"}}> Reference 1102</p>
                              <button class="backcolor1"><i class="bi bi-cart3"></i> $399</button>
                              </div>
                          
                        </div>
                       </div>
                    </div>
                </div>
                {/*  */}
                <div className=' col-md-6'>
                    <div className='card watch-border text-center '>
                       <div className='row mt-4'>
                        <div className='col'>
                        <div class=" position-relative "><img src={watch} alt="" width="80%"/></div>
                           <div class="backcolor position-absolute bottom-0 start-50 translate-middle-x " >
                              <h6 class="mt-3">Metro 38 Date</h6>
                              <p style={{fontSize:"11px"}}> Reference 1102</p>
                              <button class="backcolor1"><i class="bi bi-cart3"></i> $399</button>
                              </div>
                          
                         
                        </div>
                       </div>
                    </div>
                </div>
                {/*  */}
               
                    
               
                {/*  */}
               
                {/*  */}
                


            </div>
        </div>
    </div>
  
  )
}
export default Watches

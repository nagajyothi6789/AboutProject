
import React from 'react'
// import watch from './images/product-1.jpg'
import redwatch from './images/product-4.jpg'



function Offerwatches() {
  return (
    <div>
        <div className='container mt-5'>
            <div className='row  gx-5'>
                <div className=' col-md-4'>
                    <div className='card text-center '>
                       <div className='row mt-4'>
                        <div className='col'>
                               <h4>Haritage 1921</h4>
                               <p style={{fontSize:"13px"}}>Minimalistic & Mordern</p>
                               <h6  style={{color:"blue",  fontweight:"bold"}}>EXPLORE <i class="bi bi-chevron-right"></i></h6>
                               <img src={redwatch}  alt="" width="100%"/>
 
                        </div>
                       </div>
                    </div>
                </div>
                {/*  */}
                <div className=' col-md-4'>
                    <div className='card text-center '>
                       <div className='row mt-4'>
                        <div className='col'>
                               <h4>Haritage 1921</h4>
                               <p style={{fontSize:"13px"}}>Minimalistic & Mordern</p>
                               <h6  style={{color:"blue",  fontweight:"bold"}}>EXPLORE <i class="bi bi-chevron-right"></i></h6>
                               <img src={redwatch}  alt="" width="100%"/>    
                        </div>
                       </div>
                    </div>
                </div>
                {/*  */}
                <div className=' col-md-4'>
                    <div className='card text-center '>
                       <div className='row mt-4'>
                        <div className='col'>
                               <h4>Haritage 1921</h4>
                               <p style={{fontSize:"13px"}}>Minimalistic & Mordern</p>
                               <h6  style={{color:"blue",  fontweight:"bold"}}>EXPLORE <i class="bi bi-chevron-right"></i></h6>
                               <img src={redwatch}  alt="" width="100%"/> 
                        </div>
                       </div>
                    </div>
                </div>
               
                {/*  */}
                


            </div>
        </div>
      
    </div>
  )
}

export default Offerwatches


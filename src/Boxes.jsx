import React from 'react'

function Boxes() {
  return (
   <div>
     <div className='container mt-5'>
            <div className='row  gx-5'>
                <div className=' col-md-3'>
                    <div className='card text-center '>
                       <div className='row mt-4'>
                        <div className='col'>
                          <h5 class="mt-3"><i class="bi bi-people-fill "></i></h5>
                          <h4  class="mt-4">300</h4>
                          <p className='box-para'>Apply clients</p>
 
                        </div>
                       </div>
                    </div>
                </div>
                {/*  */}
                <div className=' col-md-3'>
                    <div className='card text-center '>
                       <div className='row mt-4'>
                        <div className='col'>
                            <h5 class="mt-3"><i class="bi bi-check-lg"></i></h5>
                            <h4  class="mt-4">30</h4>
                            <p className='box-para'>Apply clients</p>  
                        </div>
                       </div>
                    </div>
                </div>
                {/*  */}
                <div className=' col-md-3'>
                    <div className='card text-center '>
                       <div className='row mt-4'>
                        <div className='col'>
                              <h5 class="mt-3"><i class="bi bi-pass"></i></h5>
                              <h4  class="mt-4">12</h4>
                              <p className='box-para'>Apply clients</p>
                        </div>
                       </div>
                    </div>
                </div>
               
                {/*  */}
                <div className=' col-md-3'>
                    <div className='card text-center '>
                       <div className='row mt-4'>
                        <div className='col'>
                              <h5 class="mt-3"><i class="bi bi-cup-hot"></i></h5>
                              <h4  class="mt-4">960</h4>
                              <p className='box-para'>Apply clients</p>
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

export default Boxes

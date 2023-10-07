import React from 'react'
import phones from './images/product-2.jpg'


function Earphone() {
  return (
    <div>
       <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='card ear-contaner'>
              <div className='card-header  ear-contaner1'>
                <div className='row  '>
                  <div className='col '>
                    <img src={phones} alt="" width="90%"/>
                  </div>
                </div>
              </div>
              <div className='card-footer'>
                 <div className='row'>
                  <div className='col'>
                    <h4 className='fw-bold'>Oculus Queset</h4>
                    <p class="card-text">All in one gaming headset with lightweight,<br/>flexible design</p>
                  </div>
                 </div>
                 <div className='row d-flex justify-content-between mt-4'>
                  <div className='col'>
                  <h4 className='fontsize'>$ 399</h4>
                  </div>
                  <div className='col'><button className='ear-button fw-bold'><i class="bi bi-cart3"></i>  Add To Cart</button></div>
                 </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className='col-md-4'>
            <div className='card ear-contaner'>
              <div className='card-header  ear-contaner1'>
                <div className='row  '>
                  <div className='col '>
                    <img src={phones} alt="" width="90%"/>
                  </div>
                </div>
              </div>
              <div className='card-footer'>
                 <div className='row'>
                  <div className='col'>
                    <h4 className='fw-bold'>Oculus Queset</h4>
                    <p class="card-text">All in one gaming headset with lightweight,<br/>flexible design</p>
                  </div>
                 </div>
                 <div className='row d-flex justify-content-between mt-4'>
                  <div className='col'>
                  <h4 className='fontsize'>$ 399</h4>
                  </div>
                  <div className='col'><button className='ear-button fw-bold'><i class="bi bi-cart3"></i>  Add To Cart</button></div>
                 </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className='col-md-4'>
            <div className='card ear-contaner'>
              <div className='card-header  ear-contaner1'>
                <div className='row  '>
                  <div className='col '>
                    <img src={phones} alt="" width="90%"/>
                  </div>
                </div>
              </div>
              <div className='card-footer'>
                 <div className='row'>
                  <div className='col'>
                    <h4 className='fw-bold'>Oculus Queset</h4>
                    <p class="card-text">All in one gaming headset with lightweight,<br/>flexible design</p>
                  </div>
                 </div>
                 <div className='row d-flex justify-content-between mt-4'>
                  <div className='col'>
                  <h4 className='fontsize'>$ 399</h4>
                  </div>
                  <div className='col'><button className='ear-button fw-bold'><i class="bi bi-cart3"></i>  Add To Cart</button></div>
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

export default Earphone

import React from 'react'
import payment from './images/payment.png'

function Footer() {
  return (
    <div className='container4 mt-5'>
        <div className='container mt-5  d-flex justify-content-evenly'>
            <div className='row  gx-5 '>
                <div className=' col-md-6'>
                    <div className='card mt-5 user-det '>
                       <div className='row mt-6'> 
                        <div className='col'>
                             <h5>Get in touch</h5>
                             <p className='small'>Be the first know when new products drop and stay tuned</p>
 
                        </div>
                       </div>
                    </div>
                </div>
                {/*  */}
                <div className=' col-md-6'>
                    <div className='card mt-5 user-det'>
                       <div className='row '>
                        <div className='col'>
                              <p className='small'>Enter your email address</p>
                              <button className='chncol'><i class="bi bi-person-fill"></i></button><input class="inpbor" type="email" placeholder='user@email.com'/><button><i class=" fa-solid fa-arrow-right fa-lg"></i></button>
                        </div>
                       </div>
                    </div>
                </div>
                {/*  */}
              
               
                {/*  */}
               
                {/*  */}
                


            </div>
        </div>
   {/* SAMPLE */}
   
 

     
    {/* MEDIA LINKS */}
     
        <div class="container mt-5 ">
          <div class="row   border-top border-bottom ">
            <div class="col d-flex justify-content-start">
              <div class="p-3 ">
                <p className='small1'>Follow Us:
                  <span><i class="bi bi-facebook"></i></span>
                  <span><i class="bi bi-twitter"></i></span>
                  <span><i class="bi bi-instagram"></i></span>
                  <span><i class="bi bi-whatsapp"></i></span>
                  <span><i class="fa-brands fa-linkedin fa-lg"></i></span>
                </p>
              </div>
            </div>
            <div class=" col d-flex justify-content-end">
              <div class="p-3">
                <p className='small1'>We Accept:<img src={payment} alt=""/> </p>
              </div>
            </div>
          </div>
        </div>
        
      {/*ABOUT INFERMATION*/}
     
      <div className='container mt-5'>
            <div className='row '>
                <div className=' col-md-3'>
                    <div className='card listgroup1'>
                       <div className='row'>
                        <div className='col'>
                            <ul class="listgroup fw-medium lh-lg">
                               <li class="list-group-item fw-normal "style={{fontSize:"15px",color:"grey"}}>Order</li>
                               <li class="list-group-item">Outfit</li>
                               <li class="list-group-item">Sunglassess</li>
                               <li class="list-group-item">Watches</li>
                               <li class="list-group-item">Bags</li>
                            </ul>
                        </div>
                       </div>
                    </div>
                </div>
                {/*  */}
                <div className=' col-md-3'>
                    <div className='card listgroup1'>
                       <div className='row'>
                        <div className='col'>
                            <ul class="listgroup fw-medium lh-lg ">
                               <li class="list-group-item fw-normal "style={{fontSize:"15px",color:"grey"}}>Order</li>
                               <li class="list-group-item">About Us</li>
                               <li class="list-group-item">Contact Us</li>
                               <li class="list-group-item">SitemapFAQs Page</li>
                               <li class="list-group-item">Comming Soon</li>
                               <li class="list-group-item">404 Page</li>
                            </ul>
                        </div>
                       </div>
                    </div>
                </div>
                {/*  */}
                <div className=' col-md-3'>
                    <div className='card listgroup1'>
                       <div className='row'>
                        <div className='col'>
                            <ul class="listgroup fw-medium lh-lg">
                               <li class="list-group-item fw-normal "style={{fontSize:"15px",color:"grey"}}>Order</li>
                               <li class="list-group-item">Order</li>
                               <li class="list-group-item">Downloads</li>
                               <li class="list-group-item">Addresses</li>
                               <li class="list-group-item">Account details</li>
                               <li class="list-group-item">Logout</li>
                            </ul>
                        </div>
                       </div>
                    </div>
                </div>
                {/*  */}
                <div className=' col-md-3'>
                    <div className='card listgroup1'>
                       <div className='row'>
                        <div className='col'>
                            <ul class="listgroup fw-medium lh-lg">
                               
                               <li class="list-group-item fw-normal"style={{fontSize:"15px",color:"grey"}}>Community</li>
                               <li class="list-group-item">VR for Good</li>
                               <li class="list-group-item">Lunchpad</li>
                               <li class="list-group-item">Creators Lab</li>
                               <li class="list-group-item">Forums</li>
                               <li class="list-group-item">Support</li>
                            </ul>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="text-center  mt-5 mx-auto p-2 fw-lighter">
          <p style={{fontSize:"13px", fontWeight:"bold",color:"115, 115, 111"}}>Made with Nagajyothi Begada.</p>
        </div>
   
    </div>  
  )
}

export default Footer

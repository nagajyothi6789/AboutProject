import React, { useState } from 'react'
import product from './images/product-3.jpg'
import thumb1 from './images/thunb-1.jpg'
import thumb2 from './images/thunb-2.jpg'
import thumb3 from './images/thunb-3.jpg'
import thumb4 from './images/thunb-4.jpg'
import thumb5 from './images/thunb-5.jpg'
import product1 from './images/product-items-1.jpg'
import product2 from './images/product-items-2.jpg'
import product3 from './images/product-items-3.jpg'







function Earphones2() {
  
  //SET IMAGES
         const [slideimg,setslideimg] = useState(product)
  // NO OF SELECTION
         const[quantity,setQuantity] = useState(1);
                const handleDecrement = () =>{
                   if(quantity>1)
                 setQuantity(prevcount=>prevcount-1);
                    }
                const handleIncrement = () =>{
                  if(quantity<5)
                 setQuantity(prevcount=>prevcount+1);
                    }

  return (
    <div class=''> 
        <div class='earphones mt-5'>
        <div class="  earphones2 ">
            <p className='for-margin1'>All-in-One VR</p>
            <h3 className='for-margin2'>Oculus VR</h3>
        </div>
            <img src={slideimg}  height="500vh" width="70%" alt=""/>
        <div className='flex_row'>
            <div className='thumbnail1  column-gap-3 d-flex justify-content-center'>
              <div className='thumbnail'><img src={thumb1} onClick={()=>setslideimg(thumb1)} height="50" width="40" /></div>
              <div className='thumbnail'><img src={thumb2} onClick={()=>setslideimg(thumb2)} height="50" width="40" /></div>
              <div className='thumbnail'> <img src={thumb3} onClick={()=>setslideimg(thumb3)} height="50" width="40" /></div>
              <div className='thumbnail'> <img src={thumb4} onClick={()=>setslideimg(thumb4)} height="50" width="40" /></div>
              <div className='thumbnail'> <img src={thumb5} onClick={()=>setslideimg(thumb5)} height="50" width="40" /></div>
            </div>
        </div>
      </div>
      


      <div class="container_side px-4">
        <div class="row">
          <div class="col gx-5 ">
              <p style={{color:"grey"}}>All-in-One VR</p>
              <h3>Oculus VR</h3>
            <div class="side">
              <div class="child_side "><img src={product1} alt=""  id="child-side2"  width="100px" /> </div>
              <div  class="child_side"><img src={product2} alt=""  width="100px" /> </div>
              <div  class="child_side"><img src={product3} alt=""  width="100px" /> </div> 
            </div>
         
        <div class="side1">
            <div class="child_side1 "><p className='paracol'>Select Color: Grey</p>
            <button className='btn-round'style={{ boxShadow: "2px 3px 10px rgb(134, 31, 230)"}}></button>
            <button className='btn-round' style={{ backgroundColor:"pink",border:"none"}}></button>
            <button className='btn-round' style={{ backgroundColor:"black",border:"none"}}></button>
            </div>  
             
          <div  class="child_side1">
              <p className='paracol'>Memory (GB):<br/><br/>
              <select id="data"  className='paracol'>
                  <option >16gb</option>
                  <option value="saab">82gb</option>
                  <option value="vw">42gb</option>
                  <option value="audi" selected>32gb</option>
              </select>
              </p>
          </div>
           <div  class="child_side1">
                <p className='paracol'>Select Quantity:<br/><br/>
              <div className='span_btn'>
                  <button className='span_btn1' onClick={handleDecrement} >-</button>
                  <div className='span_btn2 text-center' type="text">{quantity}</div>
                  <button className='span_btn3' onClick={handleIncrement}>+</button></div> 
                </p>
              </div> 
          </div>
              <p className='paracol'>Select Shipping Country: <strong>+$ 30 USD</strong></p>
                  <select id="states" className='paracol'>
                    <option value="volvo">India</option>
                    <option value="saab">USA</option>
                    <option value="vw">China</option>
                    <option value="audi" selected>--Select Country--</option>
                  </select>
        </div>
          <div class="col">
            <div class="p-3 mt-5">
              <p className='paracol'>Price:</p>
              <div class=""><h3>$ 149 USD <del className='paraco2'>$ 179 USD</del></h3></div>
              <div><button class="btnn"><i class="bi bi-cart3"></i>ADD TO CART</button><button class="btnn1"><i class="bi bi-cart3"></i>BUY NOW</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Earphones2

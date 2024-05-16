import React from 'react'
import { HiArrowLongRight } from 'react-icons/hi2'
import { IoTrain } from 'react-icons/io5'
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <>
    <div className='footer text-white'>
    <div className=' flex   justify-between' >
      <div className='flex-col mt-5 ms-3'>
        <div className='flex justify-between'>
      <div className='flex mb-3'>
       <IoTrain style={{color:'#ba3800', fontSize:'30px'}} className='mt-1'/>
       <h3 className='text-white font-semibold text-[25px]'>
             Book Your Train</h3>
        </div> 
        </div>
        <p className='info flex-col '>Design and built with all love in the world by the <br /> Luminar team with the help of our comtributors. <br />
        Code licensed Luminar,docs CC BY 3.0. <br />
        Currently v1.0.0</p>
      </div>

      <div className='info mt-5 ms-5'>
        <h3 className='font-semibold text-[25px] mb-3'>Links</h3>
        <div className='flex-col'>
          <Link to={'/'} style={{ textDecoration: "none", color: 'white' }} > Home</Link><br />
          <Link to={'/login'} style={{ textDecoration: "none", color: 'white' }} >Login</Link> <br />
          <Link to={'/register'} style={{ textDecoration: "none", color: 'white' }} >Register</Link>
        </div>
      </div>

      <div className='info mt-5 ms-5'>
        <h3 className='font-semibold text-[25px] mb-3'>Guides</h3>
        <p>
          React <br />
          Tailwind CSS <br />
          Routing
        </p>
      </div>

      <div className='info mt-5 ms-5'>
        <h3 className='font-semibold text-[25px] mb-8'>Contact Us</h3>
        <div className='flex'>
          <input type="text" placeholder='Enter your E-mail id' style={{ borderRadius: '4px', width: '260px' }} />
          <button style={{ width: '35px', marginTop: '1px',  color:'white', backgroundColor:'#ba3800'}} className='btn  ms-1' ><HiArrowLongRight className='font-bold text-[30px]'/></button>
        </div>
        <div className='flex mt-7'>
        <i class="fa-brands fa-linkedin  mt-3" style={{ fontSize: '33px', color: 'white' }}></i>
        <i class="fa-brands fa-twitter ms-4 mt-3" style={{ fontSize: '33px', color: 'white' }} ></i>
        <i class="fa-brands fa-facebook ms-4 mt-3" style={{ fontSize: '33px', color: 'white' }}></i>
          <i className="fa-solid fa-envelope ms-4 mt-3" style={{ fontSize: '33px', color: 'white' }}></i>
          <i class="fa-brands fa-tiktok mt-3 ms-4" style={{ fontSize: '33px', color: 'white' }} ></i>
          <i class="fa-brands fa-github ms-4  mt-3" style={{ fontSize: '33px', color: 'white' }}></i>
         
        </div>
      </div>
    </div>
    <div className=' flex justify-evenly mt-2'>
      <p>Copyright © 2023 Book Your Train . Build with React</p>
    </div>
    </div>
    </>
  )
}

export default Footer
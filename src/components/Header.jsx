import React from 'react'
import { IoTrain } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header w-100vw flex justify-between relative'>
    <div className=' icons  flex gap-4 '>
<IoTrain style={{color:'#ba3800', fontSize:'25px'}}/>
<p className=' para1 text-neutral-300 font-semibold lg:mt-1'>BOOK  <span style={{fontWeight:'100'}}>YOUR</span> TRAIN</p>
    </div>

    <div className='flex gap-3 me-5 mt-1'>
<Link to={'/register'} className=' text-neutral-300 font-thin text-sm'>Sign Up</Link>
<Link to={'/login'} className=' text-neutral-300 font-thin text-sm' >Login</Link>
    </div>
    </div>

  )
}

export default Header
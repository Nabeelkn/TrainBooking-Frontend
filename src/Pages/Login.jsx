import React, { useState } from 'react'
import train from '../assets/432.jpg'
import logo from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
function Login() {
  const navigate = useNavigate()
const [formData , setFormData] = useState({
  email:"",
  password:""
})

const handleInputChange = (e)=>{
  setFormData({...formData , [e.target.name]:e.target.value})
}

const handleFormSubmit = async (e)=>{
  e.preventDefault()
  
  console.log('form submitted');
  try {
    const response = await axios.post('http://localhost:5000/api/auth/login' , formData)
    console.log('login response data :' ,response);
   toast.success("Login Successfull")
   setTimeout(() => {
    navigate('/landing')
   }, 1000);

  } catch (error) {
    console.log('login failed' ,error);
    toast.error("Login Failed")
  }
}

  return (
    <>
      <div
        className=" items-center justify-center p-8 grid lg:grid-cols-2 h-screen"
        style={{
          position: 'relative',
          backgroundImage: `url(${train})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh'
        }}>
        {/* Overlay for black shade */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)", // Black with 50% opacity
            zIndex: 0, // Ensure the overlay is behind other content
          }}
        ></div>
        <div className='col-span-1'>
        </div>
        <div className='col-span-1 py-8 relative   '
          style={{ zIndex: 1 }}>
          <div className=" loginBox p-5 rounded-2xl shadow-2xl lg:w-[500px] md:w-[400px] md:h-[450px] sm:w-[290px] sm:h-[450px] flex-col mt-[-50px] ">
            <div className=' flex justify-center  p-0'>
            <img src={logo}
              className='cursor-pointer ' 
              style={{height:'8rem'}}
              />
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-white">Login</h2>
            <form className="space-y-4" onSubmit={handleFormSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                <input
                 type="email" 
                 id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange} 
                  className="mt-1 px-4 py-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
                <input
                 type="password" 
                 id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange} 
                   className="mt-1 px-4 py-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
              </div>
              <p className='md:font-medium sm:font-semibold text-white  '>Not registered yet? <Link to={'/register'} className=' text-blue-400'>register now</Link></p>
            <div className=' flex justify-center align-middle'>
            <button type="submit" className=" lg:w-[200px] md:w-[150px] sm:w-[100px]  bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300 text-center ">Login</button>
              </div> 
            </form>
          </div>
        </div>


      </div>
    </>
  )
}

export default Login
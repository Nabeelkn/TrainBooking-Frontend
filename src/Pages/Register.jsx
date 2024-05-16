import React, { useState } from 'react'
import train from '../assets/traintrack.jpg'
import logo from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'


function Register() {
const navigate = useNavigate()
    const [formData , setFormData] = useState({
      username:'',
       email:'',
       password:'',
    })
    const handleChange = (e)=>{
      const {name , value} = e.target
      setFormData({...formData ,[name]:value})
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register' , formData)
      console.log(response);
    toast.success('Registration Successfull')
  
      setFormData({username:'',password:'',email:''})
    navigate('/login')
    } catch (error) {
      console.log('registration failed ' ,error);
  toast.warning('Registration Failed')
    }
  }
  return (
    <>
       <div
        className=" items-center justify-center p-8  h-screen"
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
     
        <div className='py-2 relative flex justify-center mt-[-20px]  '
          style={{ zIndex: 1 }}>
          <div className=" loginBox p-5 rounded-2xl shadow-2xl lg:w-[500px] lg:h-[550px] lg:mt-2 md:w-[400px] md:h-[500px] md:mt-[-45px] sm:w-[290px] sm:mt-[-55px] max-sm:[630]:mt-[-20px]  flex-col  ">
            <div className=' flex justify-center  p-0'>
            <img src={logo}
              className='cursor-pointer ' 
              style={{height:'8rem'}}
              />
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center text-white">Register</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username" className="block text-sm font-medium text-white">Username</label>
                <input
                 type="text" 
                 id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange} 
                  className="mt-1 px-4 py-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                <input 
                type="email"
                 id="email"
                  name="email" 
                  value={formData.email}
                  onChange={handleChange} 
                  className="mt-1 px-4 py-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
                <input 
                type="password"
                 id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange} 
                   className="mt-1 px-4 py-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
              </div>
              <p className='md:font-medium sm:font-semibold text-white'>Already have an account? <Link to={'/login'} className=' text-blue-400'>login...!</Link></p>
            <div className=' flex justify-center align-middle'>
            <button type="submit" className=" lg:w-[200px] md:w-[150px] sm:w-[100px]  bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300 text-center ">Register</button>
              </div> 
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
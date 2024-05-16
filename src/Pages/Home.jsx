import React from 'react'
import { Link } from 'react-router-dom'
import train from '../assets/train.jpg'
import Header from '../components/Header'

function Home() {
  return (
  <>
  <Header/>
    <div className="bg-cover bg-center h-screen flex items-center justify-center"
    style={{ backgroundImage: `url(${train})`, 
    position:'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh'}}>
             <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)", // Black with 50% opacity
            zIndex: 0, // Ensure the overlay is behind other content
          }}
        ></div>
    <div className="text-center text-white md:p-4 lg:p-6 sm:p-8" style={{zIndex:1}}>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Book Your Train Tickets with Ease</h1>
        <p className="text-lg md:text-xl mb-8">Explore scenic routes and secure your journey</p>
        <Link to="/register" 
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg uppercase transition duration-300">Get
            Started</Link>
    </div>
</div>
  </>
  
  )
}

export default Home
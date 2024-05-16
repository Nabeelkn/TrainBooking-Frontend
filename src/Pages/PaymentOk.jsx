import React, { useEffect } from 'react'
import Header from '../components/Header'
import frontImage from '../assets/front.jpg'
import { GiConfirmed } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";
import { HiTicket } from 'react-icons/hi2';
import { GrUserPolice } from "react-icons/gr";
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';
import Aos from 'aos';


function PaymentOk() {
    const { state } = useLocation()
    const { Firstname, Lastname, Age, Number, mail, Location, Train, date } = state;
    useEffect(() => {
        Aos.init({ duration: 1000 }); // Initialize AOS with default options
    }, []);
    return (
        <>
            <Header />

            <div style={{
                position: 'relative',
                backgroundImage: `url(${frontImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '80vh',
            }} className='border-b-4 border-b-orange-700'>
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
                <div className='w-full  text-white absolute mt-24' style={{ zIndex: 1 }}>
                    <GiConfirmed size={100} className=' ms-[575px]' data-aos="fade-up" />
                    <h1 data-aos="fade-up" className='font-extrabold text-white text-[50px] absolute  ms-[500px] mt-5'>Thank You!</h1>
                    <h1 data-aos="fade-up" className='font-thin text-white text-[20px] absolute  ms-[410px] mt-28'>Your Booking Process Has Been Successfully Completed</h1>
                    <h1 data-aos="fade-up" className='font-thin text-white text-[20px] absolute  ms-[500px] mt-40'>Kindly , Please check your mail</h1>

                </div>
                <div>
                </div>
            </div>

            <div className='w-full border-2 bg-gray-200 px-48 py-20'>
                <h1 data-aos="fade-up" className='text-[20px] font-semibold  mb-9 ms-2'>Ticket Details</h1>
                <div data-aos="fade-up" className='border-2 border-gray-200  p-6 bg-white rounded-md shadow-2xl w-[610px] grid grid-cols-2 '>

                    <div className='col-span-1'>
                        <p className='text-[20px] font-semibold'>{Firstname} {Lastname}</p>
                        <hr />
                        <p className='text-[15px] font-semibold mt-4'>Train:<span className='text-[20px]'>  {Train.trainName}</span></p>
                        <div className='flex gap-8 mt-4'>
                            <p className='text-[15px] font-semibold'>from:<span className='text-[20px]'>  {Train.from}</span></p>
                            <p className='text-[15px] font-semibold'>To:<span className='text-[20px]'>  {Train.to}</span></p>

                        </div>
                    </div>

                    <div className='col-span-1 border-l-2 ms-10 p-4'>
                        <p className='text-[15px] font-semibold mt-6'>Departure Time : <span className='text-[20px]'> {Train.departureTime}</span> </p>
                        <p className='text-[15px] font-semibold mt-2'>Fare : <span className='text-[20px]'> {Train.fare}</span> </p>


                    </div>
                </div>
            </div>


            <div className='payment-D p-8 mb-28 '>
                <h1 className='font- text-black text-[20px] absolute ms-28  '>E-TICKET INSTRUCTIONS</h1>

                <div className='mt-28 flex justify-evenly'>

                    <div data-aos="fade-up"className='w-64 border-2 border-slate-100 p-6 bg-white rounded-md shadow-2xl '>
                        <center>
                            <RiComputerLine className='bg-[#ba3800] w-28 h-28 p-6 text-white  rounded-[55px] mb-3 mt-7' />
                            <h1 className=' text-black text-[15px] absolute  mt-3 ms-2'>You will recieve an E-mail</h1>
                            <hr className='mt-16 w-28' />
                            <p className='text-gray-400 text-[13px] mt-5'>Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit. <br />Mollitia pariatur accusamus blanditiis </p>
                        </center>

                    </div>


                    <div data-aos="fade-up" className='w-64 border-2 border-slate-100 p-6 bg-white rounded-md shadow-2xl '>
                        <center>
                            <HiTicket className='bg-[#ba3800] w-28 h-28 p-6 text-white  rounded-[55px] mb-3 mt-7' />
                            <h1 className=' text-black text-[15px] absolute  mt-3 ms-2'>Save and print your E-ticket</h1>
                            <hr className='mt-16 w-28' />
                            <p className='text-gray-400 text-[13px] mt-5'>Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit. <br />Mollitia pariatur accusamus blanditiis </p>
                        </center>

                    </div>


                    <div data-aos="fade-up" className='w-64 border-2 border-slate-100 p-6 bg-white rounded-md shadow-2xl '>
                        <center>
                            <GrUserPolice className='bg-[#ba3800] w-28 h-28 p-6 text-white  rounded-[55px] mb-3 mt-7' />
                            <h1 className=' text-black text-[15px] absolute  mt-3 ms-2'>Show your E-ticket on check-in</h1>
                            <hr className='mt-16 w-28' />
                            <p className='text-gray-400 text-[13px] mt-5'>Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit. <br />Mollitia pariatur accusamus blanditiis </p>
                        </center>

                    </div>

                </div>

            </div>
            <Footer />
        </>
    )
}

export default PaymentOk
import React, { useEffect, useState } from 'react'
import { HiMiniArrowsRightLeft } from 'react-icons/hi2';
import { IoPeopleSharp, IoTrain } from 'react-icons/io5'
import { useLocation, useNavigate } from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { GiConfirmed } from 'react-icons/gi';

function Passengers() {
    const navigate = useNavigate()
    const { state } = useLocation();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [number, setNumber] = useState('');
    const [mail, setMail] = useState('');
    const [location, setLocation] = useState('');
    const [passengerFormComplete, setPassengerFormComplete] = useState(false);
    const [cardFormComplete, setCardFormComplete] = useState(false);
    const [cardNumber, setCardNumber] = useState('')
    const [cardName, setCardName] = useState('')
    const [cvv, setCvv] = useState('')
    const [expiryM, setExpiryM] = useState('')
    const [expiryY, setExpiryY] = useState('')
    const [formSubmitted, setFormSubmitted] = useState(false);

    if (!state || !state.train) {
        return <div>No train details found</div>;
    }
    const { train, date, noOfAdults, noOfKids, totalAmount } = state;
    const trainName = train.trainName
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with default options
    }, []);

    const formData = {
        firstName,
        lastName,
        age,
        mail,
        number,
        location,
        trainName
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!firstName || !lastName || !age || !number || !mail || !location) {
            toast.error('Please fill the passenger details ')

        }
        console.log(formData);
        try {
            const response = await axios.post('http://localhost:5000/api/create/passenger', formData);
            console.log('Passenger details saved:', response.data);

            setFormSubmitted(true);
        } catch (error) {
            console.error('Error saving passenger details:', error);
            // Handle error state or show a message to the user
        }

    };



    const handleValidationPage = (e) => {
        e.preventDefault()
        if (!cardName || !cardNumber || !expiryM || !expiryY || !cvv) {
            toast.error('Please fill the required card details')
        } else {
            navigate('/payment', {
                state: {
                    Firstname: firstName,
                    Lastname: lastName,
                    Age: age,
                    Number: number,
                    mail: mail,
                    Location: location,
                    Train: train,
                   date
                }
            })
        }

    }

    return (
        <>
            <div className='result2'>
                <div className='header2 w-100vw flex justify-between relative'>
                    <div className=' icons  flex gap-4 '>
                        <IoTrain style={{ color: '#ba3800', fontSize: '25px' }} />
                        <p className=' para1 text-neutral-300 font-semibold lg:mt-1'>BOOK  <span style={{ fontWeight: '100' }}>YOUR</span> TRAIN</p>
                    </div>
                </div>

                <div className='bg-gray-600 h-12 px-4 py-2 flex '>
                    <div className='flex gap-3'>
                        <IoPeopleSharp className='text-[25px] text-[#ba3800] mt-1' />
                        <p className='text-gray-300 text-[20px]'> Passenger Details</p>
                    </div>
                </div>

                <div className='px-10'>
                    <div className='grid grid-cols-2'>

                        {/* left summary box */}
                        <div data-aos="zoom-in-right" className=' p-div col-span-1 text-gray-300 text-center w-60  mt-10 p-5 rounded-md drop-shadow-2xl'>
                            <h2 className='font-semibold text-[18px] mb-2'>Summary</h2>
                            <hr />
                            <div className='flex justify-between mt-2 py-5 border-b-2 border-b-orange-700'>
                                <p className='text-sm text-gray-400'>Train <br />
                                    Name </p>
                                <p >{train.trainNo} <br />
                                    {train.trainName}</p>
                            </div>

                            <div className='flex justify-evenly mt-4 gap-5 py-5  border-b-2 border-b-orange-700'>
                                <p>{train.from}</p>
                                <HiMiniArrowsRightLeft className='mt-2' />
                                <p>{train.to}</p>
                            </div>
                            <div className=' border-b-2 border-b-orange-700 py-4'>

                                <div className='flex justify-evenly gap-4 mb-3'>
                                    <p className='text-sm text-gray-400'> No.Of Adults</p>
                                    <p>{noOfAdults}</p>
                                </div>
                                <div className='flex justify-evenly gap-4 '>
                                    <p className='text-sm text-gray-400'> No.Of Kids</p>
                                    <p>{noOfKids}</p>
                                </div>
                            </div>
                            <div className='border-b-2 border-b-orange-700 py-4'>
                                <div className='flex justify-evenly gap-4 mt- mb-2'>
                                    <p className='text-sm text-gray-400'> Departure</p>
                                    <p>{train.departureTime}</p>
                                </div>
                                <div className='flex justify-evenly gap-4 '>
                                    <p className='text-sm text-gray-400'> Date</p>
                                    <p className='ms-6'>{date}</p>
                                </div>
                            </div>
                            <div className='flex justify-evenly gap-4 py-2'>
                                <p className='text-[23px] font-semibold'>Total </p>
                                <p className='text-[23px] font-semibold'>:</p>
                                <p className='text-[#ba3800] text-[25px] font-bold'>₹{totalAmount}</p>
                            </div>

                        </div>

                        {/* right input box */}
                        <div data-aos="zoom-in-left" className='details col-span-1 border-2  bg-white mt-10 p-5 rounded-md drop-shadow-2xl h-[350px] '>
                            <div className='border-b-2  border-b-orange-700 mb-7'>
                                <h2 className='text-black font-semibold text-[25px]'>Details</h2>
                            </div>

                            <form onSubmit={handleSubmit} id='passengerForm'   >
                                <div className='flex justify-between mb-9'>
                                    <div className='flex flex-col'>
                                        <label className='ms-2 text-gray-500'>First Name</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={firstName}
                                            onChange={(e) => {
                                                setFirstName(e.target.value)

                                            }}
                                            className='border-2 w-52 rounded-md h-8 border-[#c2c2c2]' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='ms-2 text-gray-500'>Last Name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={lastName}
                                            onChange={(e) => {
                                                setLastName(e.target.value)

                                            }}
                                            className='border-2 w-52 rounded-md h-8  border-[#c2c2c2]' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='ms-2 text-gray-500'>Age</label>
                                        <input
                                            name="age"
                                            type="number"
                                            value={age}
                                            onChange={(e) => {
                                                setAge(e.target.value)

                                            }}
                                            className='border-2 w-52 rounded-md h-8  border-[#c2c2c2]' />
                                    </div>
                                </div>

                                <div className='flex justify-between mb-10'>
                                    <div className='flex flex-col'>
                                        <label className='ms-2 text-gray-500'>Mobile Number</label>
                                        <input
                                            name="number"
                                            type="Number"
                                            value={number}
                                            onChange={(e) => {
                                                setNumber(e.target.value)

                                            }}
                                            className='border-2 w-52 rounded-md h-8 border-[#c2c2c2]' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='ms-2 text-gray-500'>E-mail</label>
                                        <input
                                            type="mail"
                                            value={mail}
                                            onChange={(e) =>
                                                setMail(e.target.value)}
                                            className='border-2 w-52 rounded-md h-8 border-[#c2c2c2]' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='ms-2 text-gray-500'>Location</label>
                                        <input

                                            type="text"
                                            value={location}
                                            onChange={(e) =>
                                                setLocation(e.target.value)}
                                            className='border-2 w-52 rounded-md h-8  border-[#c2c2c2]' />
                                    </div>

                                </div>
                                <button type='submit' form='passengerForm' className='bg-[#ba3800] text-white rounded-md px-5 py-2  drop-shadow-md mt-[10px] '
                                >{formSubmitted ? <GiConfirmed className='text-white text-[25px]' /> : 'Buy Ticket'}</button>

                            </form>

                            <div className='details border-2  bg-white w-[800px]  mt-20 p-5 rounded-md drop-shadow-2xl h-[330px] ms-[-20px] mb-9  '>
                                <div className='border-b-2  border-b-orange-700 mb-7'>
                                    <h2 className='text-black font-semibold text-[25px]'>Card Details</h2>
                                </div>

                                <form onSubmit={handleValidationPage} >
                                    <div className='flex justify-between mb-9'>
                                        <div className='flex flex-col'>
                                            <label className='ms-2 text-gray-500'> Card Number</label>
                                            <input
                                                name="cardNumber"
                                                type="text"
                                                placeholder='xxxx-xxxx-xxxx-xxxx'
                                                value={cardNumber}
                                                onChange={(e) => {
                                                    setCardNumber(e.target.value);
                                                    handleCardFormChange();
                                                }}
                                                className='border-2 w-[23rem] rounded-md h-8 border-[#c2c2c2] p-2' />
                                        </div>
                                        <div className='flex flex-col'>
                                            <label className='ms-2 text-gray-500'>Cardholder Name</label>
                                            <input
                                                type="text"
                                                value={cardName}
                                                name="cardName"
                                                onChange={(e) => {
                                                    setCardName(e.target.value);
                                                  
                                                }}
                                                className='border-2 w-[23rem] rounded-md h-8 p-3  border-[#c2c2c2]' />
                                        </div>

                                    </div>

                                    <div className='flex justify-between mb-4'>
                                        <div className='flex flex-col'>
                                            <label className='ms-2 text-gray-500'>Expiration Date</label>
                                            <input
                                                type="Number"
                                                placeholder='month'
                                                name="expiry"
                                                value={expiryM}
                                                onChange={(e) => {
                                                    setExpiryM(e.target.value);
                                                 
                                                }}
                                                className='border-2 w-52 rounded-md h-8 border-[#c2c2c2] p-3' />
                                        </div>
                                        <div className='flex flex-col'>
                                            <label className='ms-2 text-gray-500'></label>
                                            <input
                                                type="mail"
                                                value={expiryY}
                                                placeholder='year'
                                                name="expiry"
                                                onChange={(e) => {
                                                    setExpiryY(e.target.value);
                                                
                                                }}
                                                className='border-2 w-52 rounded-md h-8 mt-6 p-3 border-[#c2c2c2]' />
                                        </div>
                                        <div className='flex flex-col'>
                                            <label className='ms-2 text-gray-500'>CVV</label>
                                            <input
                                                type="text"
                                                placeholder='_ _ _'
                                                value={cvv}
                                                name="cvv"
                                                onChange={(e) => {
                                                    setCvv(e.target.value);
                                               
                                                }}
                                                className='border-2 w-52 rounded-md h-8  p-3 border-[#c2c2c2]' />
                                        </div>
                                    </div>
                                    <button type='submit' className='bg-[#ba3800] text-white rounded-md px-5 py-2  drop-shadow-md mt-[10px] ' >  buy Ticket </button>

                                </form>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Passengers
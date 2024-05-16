import React, { useEffect, useState } from 'react'
import frontImage from '../assets/front.jpg'
import { HiBuildingOffice, HiMiniArrowsRightLeft } from "react-icons/hi2";
import Footer from '../components/Footer';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import goa from '../assets/goa.jpg'
import baramulla from '../assets/baramulla.jpg'
import jodhpur from '../assets/jodhpur.jpg'
import nilgir from '../assets/nilgiri.jpg'
import rameshwaram from '../assets/rameshwaram.png'
import shimla from '../assets/shimla.jpg'
import track from '../assets/track.jpg'
import { FaComputer, FaGlobe } from "react-icons/fa6";
import trainData from '../data/train.json'
import { useNavigate } from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css';


function Landing() {

    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');
    const [numAdults, setNumAdults] = useState('');
    const [numKids, setNumKids] = useState('');
    const navigate = useNavigate()

    const handleSearch = () => {
        console.log('Searching trains from:', from);
        console.log('Searching trains to:', to);

        // Filter trains based on from and to destinations
        const filteredTrains = trainData.filter(train =>
            train.from.trim().toLowerCase() === from.trim().toLowerCase() &&
            train.to.trim().toLowerCase() === to.trim().toLowerCase()
        );

        console.log('Filtered trains:', filteredTrains);

        // Redirect to results page with filtered trains as state
        navigate('/trains', {
            state: {
                trains: filteredTrains,
                date: date,
                noOfAdults: numAdults,
                noOfKids: numKids
            }
        });
    };
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with default options
    }, []);

    return (
        <>
            <div className="container mx-auto  " >
                {/* div with image */}
                <div className='grid grid-cols-2 border-b-4 border-b-orange-700 '
                    style={{
                        position: 'relative',
                        backgroundImage: `url(${frontImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '100vh',
                    }}>
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
                    <div className=" col-span-1  " style={{ zIndex: 1 }}>
                        <div className='ms-[180px] mt-44'>
                            <h2 className='font-bold text-4xl text-white '>WELCOME TO <br /> BOOK <span style={{ fontWeight: '100' }}> YOUR</span> TRAIN</h2>
                            <br />
                            <p className='text-neutral-300 font-medium leading-normal'>We saves your time both purchasing, <br />the check-in and during travel </p>
                        </div>

                    </div>
                    <div className="col-span-1">
                        {/* inputs */}
                        <div className='inputBox mt-28 p-3'>
                            <p className='text-white '>Travelling Route</p>

                            <div className='flex justify-between mt-2'>

                                <input
                                    type="text"
                                    id="From"
                                    value={from}
                                    onChange={e => setFrom(e.target.value)}
                                    name="From"
                                    placeholder='From'
                                    className="mt-1 px-4 py-2 block w-48 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
                                <HiMiniArrowsRightLeft color='white' style={{ fontSize: '25px' }} className='mt-2' />

                                <input
                                    type="text"
                                    id="To"
                                    name="To"
                                    value={to}
                                    onChange={e => setTo(e.target.value)}
                                    placeholder='To'
                                    className="mt-1 px-4 py-2 block w-48 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />

                            </div>
                            <p className='text-white mt-4'>Travelling Date</p>
                            <input
                                type="text"
                                id="date"
                                name="date"
                                value={date}
                                onChange={e => setDate(e.target.value)}
                                placeholder='DD/MM/YY   '
                                className="mt-2 px-4 py-2 block w-48 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />


                            <p className='text-white mt-3'>Traveling Persons</p>
                            <div>
                                <div className=" flex justify-between" >
                                    <input
                                        type="text"
                                        id="From"
                                        name="From"
                                        placeholder='No.of Adults'
                                        value={numAdults}
                                        onChange={e => setNumAdults(e.target.value)}
                                        className="mt-2 px-4 py-2 block w-48 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />

                                    <input
                                        type="text"
                                        id="From"
                                        name="From"
                                        placeholder='No.of Kids'
                                        value={numKids}
                                        onChange={e => setNumKids(e.target.value)}
                                        className="mt-2 px-4 py-2 block w-48 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />

                                </div>
                            </div>
                            <div>
                                <button className='rounded bg-[#fd6100cf] w-48 h-8 text-white drop-shadow-md ms-[262px] mt-10' onClick={handleSearch}>Search Ticket</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* photo cards */}
                <div className='px-16'>
                    <h4 className='mb-10 mt-7 font-medium text-xl'>  TOP TRAVEL DESTINATIONS</h4>
                    <div className='flex justify-evenly'>

                        <div data-aos="zoom-in-right">
                            <Card sx={{ width: 280 }} className=' drop-shadow-2xl border-b-4 border-b-orange-700' >
                                <CardMedia
                                    sx={{ height: 280 }}
                                    image={goa}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className='flex justify-between'>
                                        <p className='text-[20px]'>Mumbai</p>
                                        <p className='text-[20px]'>Goa</p>
                                    </Typography>
                                    <hr />

                                    <Typography variant="body2" color="text.secondary" >
                                        Starting from <span className='text-[#ba3800] text-lg'>$</span> <span className='text-black text-lg'>345</span>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>

                        <div data-aos="zoom-in-up">
                            <Card sx={{ width: 280 }} className=' drop-shadow-2xl border-b-4 border-b-orange-700' >
                                <CardMedia
                                    sx={{ height: 280 }}
                                    image={baramulla}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className='flex justify-between'>
                                        <p className='text-[20px]'>Jammu</p>
                                        <p className='text-[20px]'>Baramulla</p>
                                    </Typography>
                                    <hr />

                                    <Typography variant="body2" color="text.secondary" >
                                        Starting from <span className='text-[#ba3800] text-lg'>$</span> <span className='text-black text-lg'>345</span>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>


                        <div data-aos="zoom-in-left">
                            <Card sx={{ width: 280 }} className=' drop-shadow-2xl border-b-4 border-b-orange-700' >
                                <CardMedia
                                    sx={{ height: 280 }}
                                    image={jodhpur}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className='flex justify-between'>
                                        <p className='text-[20px]'>Jaisalmer</p>
                                        <p className='text-[20px]'>Jodhpur</p>
                                    </Typography>
                                    <hr />

                                    <Typography variant="body2" color="text.secondary" >
                                        Starting from <span className='text-[#ba3800] text-lg'>$</span> <span className='text-black text-lg'>345</span>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>

                    </div>

                </div>
                <div className='px-16 mt-20 mb-16'>
                    <div className='flex justify-evenly'>
                        <div data-aos="zoom-in-right">
                            <Card sx={{ width: 280 }} className=' drop-shadow-2xl border-b-4 border-b-orange-700'>
                                <CardMedia
                                    sx={{ height: 280 }}
                                    image={shimla}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className='flex justify-between'>
                                        <p className='text-[20px]'>Kalka</p>
                                        <p className='text-[20px]'>Shimla</p>
                                    </Typography>
                                    <hr />

                                    <Typography variant="body2" color="text.secondary" >
                                        Starting from <span className='text-[#ba3800] text-lg'>$</span> <span className='text-black text-lg'>345</span>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>

                        <div data-aos="zoom-in-up">
                            <Card sx={{ width: 280 }} className=' drop-shadow-2xl border-b-4 border-b-orange-700'>
                                <CardMedia
                                    sx={{ height: 280 }}
                                    image={nilgir}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className='flex justify-between'>
                                        <p className='text-[20px]'>Mettupalaym</p>
                                        <p className='text-[20px]'>Ooty</p>
                                    </Typography>
                                    <hr />

                                    <Typography variant="body2" color="text.secondary" >
                                        Starting from <span className='text-[#ba3800] text-lg'>$</span> <span className='text-black text-lg'>345</span>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>

                        <div data-aos="zoom-in-left">
                            <Card sx={{ width: 280 }} className=' drop-shadow-2xl border-b-4 border-b-orange-700' >
                                <CardMedia
                                    sx={{ height: 280 }}
                                    image={rameshwaram}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className='flex justify-between'>
                                        <p className='text-[20px]'>Madhurai</p>
                                        <p className='text-[20px]'>Rameshwaram</p>
                                    </Typography>
                                    <hr />

                                    <Typography variant="body2" color="text.secondary" >
                                        Starting from <span className='text-[#ba3800] text-lg'>$</span> <span className='text-black text-lg'>345</span>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>

                    </div>

                </div>

                <div className='w-full py-6' style={{
                    position: 'relative',
                    backgroundImage: `url(${track})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '65vh'
                }}>
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(245, 85, 5, 0.8)", // Black with 50% opacity
                            zIndex: 0, // Ensure the overlay is behind other content
                        }}
                    ></div>
                    <div style={{ zIndex: 1 }} className='relative px-16'>
                        <h3 className='text-white text-[20px] font-semibold mb-6 ms-28'>E-TICKET ADVANTAGES</h3>


                        <div className='flex justify-evenly'>

                            <div>
                                <div className='icon relative'> <FaComputer className='  text-[#f55505] ms-7 text-[70px] absolute mt-6 ' />  </div>
                                <hr className='w-32 mt-5' />
                                <p className='text-white text-sm ms-[-30px] mt-4 '>It is easy to order a train ticket <br /> online.
                                    E-Ticket can not be lost or <br />
                                    forgotten at home</p>
                            </div>


                            <div>
                                <div className='icon2 relative ms-8'> <HiBuildingOffice className='  text-[#f55505] ms-7 text-[70px] absolute mt-6 ' />  </div>
                                <hr className='w-32 mt-5 ms-8' />
                                <p className='text-white text-sm ms-[-30px] mt-4 '>There is no need to go to the ticket office <br /> Additionally befor you start a trip. Save your <br />
                                    money and nerves </p>
                            </div>


                            <div>
                                <div className='icon3 ms-6 relative'> <FaGlobe className='  text-[#f55505] ms-7 text-[70px] absolute mt-6 ' />  </div>
                                <hr className='w-32 mt-5 ms-6' />
                                <p className='text-white text-sm ms-[-30px] mt-4 '>To order ticket all you need is internet , a <br /> couple of minutes and a payment card. <br />
                                    Grab bonuses and discounts</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Landing
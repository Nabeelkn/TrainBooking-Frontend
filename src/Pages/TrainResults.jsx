import React, { useEffect, useState } from 'react'
import { IoTicketSharp, IoTrain, IoTrainSharp } from 'react-icons/io5';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { HiMiniArrowsRightLeft } from 'react-icons/hi2';
import AOS from 'aos'
import 'aos/dist/aos.css';


function TrainResults() {

    const navigate = useNavigate();
    const { state } = useLocation();
    console.log('Location State:', state);
    if (!state || !state.trains) {
        // Handle case where state or trains array is missing
        return <div>No trains found</div>;
    }

    const { trains, date , noOfAdults,noOfKids } = state;

    const [hoveredTrain, setHoveredTrain] = useState(null);

    useEffect(() => {
        AOS.init({ duration: 1000 }); 
    }, []);

    const handleBuyNow = (train) => {
        const totalPersons = parseInt(noOfAdults) + parseInt(noOfKids);
        const totalAmount = train.fare * totalPersons;
        // Navigate to the Passengers page with selected train details
        navigate(`/passengers/${encodeURIComponent(train.trainName)}`, { state: { train , date , noOfAdults , noOfKids , totalAmount } });
    };

    return (

        <div className='resultPage'>
            <div className='header2 w-100vw flex justify-between relative'>
                <div className=' icons  flex gap-4 '>
                    <IoTrain style={{ color: '#ba3800', fontSize: '25px' }} />
                    <p className=' para1 text-neutral-300 font-semibold lg:mt-1'>BOOK  <span style={{ fontWeight: '100' }}>YOUR</span> TRAIN</p>
                </div>
            </div>

            <div className='bg-gray-600 h-12 px-4 py-2 flex '>
           <div className='flex gap-3'>
           <IoTicketSharp  className='text-[25px] text-[#ba3800] mt-1'/>
                <p className='text-gray-300 text-[20px]'> Train Details</p>
           </div>
            </div>

            <div className='result  px-8 py-11 '>

                <h2 className='px-10 font-semibold text-xl ms-60 mb-3'>Found : {trains.length} trains</h2>
                <div className='ms-60' data-aos="fade-up"
                    data-aos-duration="3000" >
                    {trains.map(train => (
                        <div key={train.trainName}
                            className={`border-2 border-neutral bg-white rounded-md grid grid-cols-3 mb-4 drop-shadow-xl w-[700px] ${hoveredTrain === train.trainName ? 'border-orange-700' : 'border-neutral'
                                }`}
                            onMouseEnter={() => setHoveredTrain(train.trainName)}
                            onMouseLeave={() => setHoveredTrain(null)}
                        >
                            <div className='col-span-1 w-44 border-r-2  '>
                                <IoTrainSharp className='trsinLogo p-2 mx-10 m-5 ' />
                                <h2 className='text-center font-semibold text-[20px]'>{train.trainNo}</h2>
                                <h4 className='mb-5 text-center text-[20px] font-semibold'>  {train.trainName}</h4>
                            </div>
                            <div className='col-span-1  w-72 border-r-2 '>
                                <div className='flex gap-5   mt-16 text-center'>
                                    <h2 className='text-[20px] font-semibold'> {train.from}</h2>
                                    <HiMiniArrowsRightLeft color='black' style={{ fontSize: '25px' }} className='mt-2' />
                                    <h2 className='text-[20px] font-semibold'>{train.to}</h2>
                                </div>

                                <p className='text-center -ms-14 font-light text-[15px]'> {train.departureTime}</p>
                                <p className='text-center -ms-14 font-medium'> {date}</p>
                               

                            </div>
                            <div className='col-span-1 text-center mt-16     '>
                                <p className='text-[#ba3800] mb-3 ms-12 '><span className='font-semibold text-[25px]'>₹</span> <span className='font-semibold text-[25px]'>{train.fare}</span><span className='text-slate-500'>/person</span></p>
                                <button className=' buyButton rounded-md px-5 py-2 ms-12 drop-shadow-md'  onClick={() => handleBuyNow(train , date)}>  buy now  </button>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default TrainResults
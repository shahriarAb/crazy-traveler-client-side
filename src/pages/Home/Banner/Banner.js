import React from 'react';
import banner from '../../../images/banner.jpg';

const Banner = () => {
    return (
        <div className="relative text-center mb-30">
            <img style={{ filter: 'brightness(35%)' }} src={banner} className="w-full h-screen rounded-b-3xl object-cover" alt="" />
            <div className="absolute text-white bottom-52 ml-auto mr-auto left-0 right-0">
                <div style={{ fontSize: '65px' }} className="font-black">
                    <p>TRAVEL AROUND THE WORLD</p>
                    <p>EXPLORE THE BEAUTY OF NATURE</p>
                </div>
                <p className="text-3xl" style={{ fontFamily: 'Dancing Script, cursive' }}><i className="fas fa-quote-left text-2xl absolute bottom-28 opacity-40"></i> The world is a book and those who do not travel read only one page.</p>
                <button className="border-2 border-red-100 text-red-50 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50 py-2 px-10 rounded-lg text-white font-semibold text-lg shadow-md mt-12 mr-6">CONTINUE READING</button>
            </div>
            <div className="absolute -bottom-16 ml-16">
                <div className="shadow-lg p-12 text-left bg-white flex">
                    <div>
                        <p>Search Destination*</p>
                        <input type="text" placeholder="Enter Destination" className="py-2 px-4 bg-gray-100" />
                    </div>
                    <div className="ml-8">
                        <p>Traveler*</p>
                        <input type="text" placeholder="No. of Tourist" className="py-2 px-4 bg-gray-100" />
                    </div>
                    <div className="ml-8">
                        <p>Checkin Date*</p>
                        <input type="date" className="py-2 px-4 bg-gray-100" />
                    </div>
                    <div className="ml-8">
                        <p>Checkout Date*</p>
                        <input type="date" className="py-2 px-4 bg-gray-100" />
                    </div>
                    <div>
                        <button className="border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50 px-8 py-3 mt-4 rounded-lg text-white font-semibold shadow-md ml-6">INQUIRE NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';

const MyBookings = () => {
    const { user } = useAuth();
    const [allbookings, setAllbookings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://ghostly-vault-43616.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => {
                setAllbookings(data);
                setIsLoading(false);
            });
    }, []);

    let myBookings = allbookings.filter(myBook => myBook.email === user.email);

    const handleCancel = id => {
        const proceedToDelete = window.confirm('Are you sure you want to cancel this booking?');
        if (proceedToDelete) {
            const url = `https://ghostly-vault-43616.herokuapp.com/bookings/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount > 0) {
                        myBookings = myBookings.filter(allbooking => allbooking._id !== id);
                        alert('Successfully canceled this booking!');
                    }
                });
        }
    }

    if (isLoading) {
        return (
            <div className="mt-16 flex justify-center items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
                <div className="ml-2 text-xl text-red-700 font-bold animate-pulse">Loading...</div>
            </div>
        );
    }
    return (
        <div>
            <h2 className="ml-8 mt-8 text-2xl font-bold text-red-500">My all bookings</h2>
            {
                myBookings.length === 0 ?
                    <p className="text-center mt-10 font-semibold text-lg text-red-500">Not any bookings yet! To book select any package/destination from home page.</p>
                    :
                    allbookings.map(myBooking =>
                        <div
                            key={myBooking._id}
                            className="bg-gray-100 mt-10 mx-16 p-6 rounded-md shadow-md font-semibold">
                            <span className="text-lg"><i className="fas fa-map-marked-alt"></i> Destination: {myBooking.destination}</span>
                            <span className="ml-6"><i className="fas fa-igloo"></i> Package: 3 Days &bull; 2 Nights</span>
                            <span className="ml-6"><i className="fas fa-phone-square"></i> Phone: {myBooking.phone_number}</span>
                            <span className="ml-6"><i className="fas fa-plane-departure"></i> Transport: {myBooking.vehicles}</span>
                            <span className="ml-6"><i className="fas fa-clock"></i> Time: {myBooking.journey_time}</span>
                            <button onClick={() => handleCancel(myBooking._id)} className="bg-red-500 float-right text-white px-2 py-1 rounded-md hover:bg-red-600 hover:shadow-lg">Cancel Book</button>
                        </div>)
            }
        </div>
    );
};

export default MyBookings;

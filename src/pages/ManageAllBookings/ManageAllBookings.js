import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

const ManageAllBookings = () => {
    const [manageBookings, setManageBookings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch('http://localhost:5500/bookings')
            .then(res => res.json())
            .then(data => {
                setManageBookings(data);
                setIsLoading(false);
            });
    }, []);

    const handleDelete = id => {
        const proceedToDelete = window.confirm('Are you sure you want to delete this booking?');
        if (proceedToDelete) {
            const url = `http://localhost:5500/bookings/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount > 0) {
                        const remainingBookings = manageBookings.filter(allbooking => allbooking._id !== id);
                        setManageBookings(remainingBookings);
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
                manageBookings.length === 0 ?
                    <p className="text-center mt-10 font-semibold text-lg text-red-500">*No booking found on database yet!</p>
                    :
                    manageBookings.map(booking =>
                        <div
                            key={booking._id}
                            className="bg-gray-100 mt-10 mx-16 p-6 rounded-md shadow-md font-semibold">
                            <p><i class="far fa-user"></i> User: {booking.email}</p>
                            <span className="text-lg"><i className="fas fa-map-marked-alt"></i> Destination: {booking.destination}</span>
                            <span className="ml-6"><i className="fas fa-igloo"></i> Package: 3 Days &bull; 2 Nights</span>
                            <span className="ml-6"><i className="fas fa-phone-square"></i> Phone: {booking.phone_number}</span>
                            <span className="ml-6"><i className="fas fa-plane-departure"></i> Transport: {booking.vehicles}</span>
                            <span className="ml-6"><i className="fas fa-clock"></i> Time: {booking.journey_time}</span>
                            <button onClick={() => handleDelete(booking._id)} className="bg-red-500 float-right text-white px-2 py-1 rounded-md hover:bg-red-600 hover:shadow-lg">Cancel Book</button>
                        </div>)
            }
        </div>
    );
};

export default ManageAllBookings;
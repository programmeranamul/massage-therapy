import React, { useEffect, useState } from 'react';
import AdminPageTitle from '../AdminPageTitle/AdminPageTitle';
import CustomarBookingCard from '../CustomarBookingCard/CustomarBookingCard';

const CustomarBookingList = () => {

    const logInUser = JSON.parse(localStorage.getItem('user'))
    const [bookingList, setBookingList] = useState([])


    useEffect(() => {
        fetch('http://localhost:8000/customarBookingsList', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: logInUser.email })

        })
            .then(res => res.json())
            .then(data => setBookingList(data))
    }, [])

    return (
        <section className="booking-list">
            <AdminPageTitle title={"Booking List"} />
            <div className="row pl-3 pr-5">
                {
                    bookingList.map(booking => <CustomarBookingCard key={booking._id} booking={booking} />)
                }
            </div>
        </section>
    );
};

export default CustomarBookingList;
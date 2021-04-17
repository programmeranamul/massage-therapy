import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import AdminPageTitle from '../AdminPageTitle/AdminPageTitle';
import CustomarBookingCard from '../CustomarBookingCard/CustomarBookingCard';

const CustomarBookingList = () => {

    const logInUser = JSON.parse(localStorage.getItem('user'))
    const [bookingList, setBookingList] = useState([])


    useEffect(() => {
        fetch('https://fathomless-retreat-05696.herokuapp.com/customarBookingsList', {
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
            <div className="row">
                {
                    bookingList.map(booking => <CustomarBookingCard key={booking._id} booking={booking} /> ) 
                }
            </div>
        </section>
    );
};

export default CustomarBookingList;
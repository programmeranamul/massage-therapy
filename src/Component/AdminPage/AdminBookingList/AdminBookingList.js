import React, { useEffect, useState } from 'react';
import AdminOrderListTable from '../AdminOrderListTable/AdminOrderListTable';
import AdminPageTitle from '../AdminPageTitle/AdminPageTitle';


const AdminBookingList = () => {

    const [bookings, setBookings] = useState([])

    useEffect(() => {
        fetch('https://fathomless-retreat-05696.herokuapp.com/adminBookingsList')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    console.log(bookings)


    return (
        <section className="admin-order-list">
            <AdminPageTitle title={"Booking List"} />           
            <AdminOrderListTable bookings={bookings} />
        </section>
    );
};

export default AdminBookingList;
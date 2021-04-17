import React, { useEffect, useState } from 'react';
import AdminOrderListTable from '../AdminOrderListTable/AdminOrderListTable';
import AdminPageTitle from '../AdminPageTitle/AdminPageTitle';


const AdminBookingList = () => {

    const [bookings, setBookings] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/adminBookingsList')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    console.log(bookings)


    return (
        <section className="admin-order-list">
            <AdminPageTitle title={"Booking List"} />
            {/* {
                bookings.map(booking => <AdminOrderListTable key={booking._id} />)
            } */}
            <AdminOrderListTable bookings={bookings} />
        </section>
    );
};

export default AdminBookingList;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import AdminPageTitle from '../AdminPageTitle/AdminPageTitle';
import BookingDetails from '../BookingDetails/BookingDetails';


const Booking = () => {
    const { id } = useParams();
    const [service, setService] = useState({})
   
        useEffect(() => {
            fetch("https://fathomless-retreat-05696.herokuapp.com/service/" + id || '')
                .then((res) => res.json())
                .then((data) => {
                    setService(data);
                });
        }, [id]);
  


    return (
        <section className="book-page pl-5">
            <AdminPageTitle title={"Book"} />
            <div className="add-service-form-container">
                <BookingDetails service={service} />
            </div>
        </section>
    );
};

export default Booking;
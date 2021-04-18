import React, { useEffect, useState } from 'react';
import image from '../../../Image/Vector-Smart-Object-6.webp'
import ServiceCard from '../ServiceCard/ServiceCard'

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://fathomless-retreat-05696.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    return (
        <section className="py-5 container">
            <img className="mx-auto d-block" src={image} alt="Vector Icon" />
            <h2 className="text-center mb-5">Our Awesome <span className="custom-color">Services</span></h2>
            <div className="row">
                {
                    services.map(service => <ServiceCard key={service._id} service={service} />)
                }
            </div>
        </section>
    );
};

export default Services;
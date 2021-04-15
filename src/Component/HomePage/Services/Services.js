import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard/ServiceCard';


const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://fathomless-retreat-05696.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    return (
        <section className="py-5 container">
            <h2 className="text-center mb-5">Our Awesome <span className="custom-color">Services</span></h2>
            <div className="row">
                {
                    services.map(service => <ServiceCard key={service._id} service={service} />)
                }
            </div>
            <button className="custom-button-background btn py-3 px-4 text-white mt-5 mx-auto d-block">Explorer More</button>
        </section>
    );
};

export default Services;
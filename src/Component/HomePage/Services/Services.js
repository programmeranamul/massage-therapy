import React from 'react';
import icon1 from '../../../Image/massageIcon (1).png'
import icon2 from '../../../Image/massageIcon (2).png'
import icon4 from '../../../Image/massageIcon (4).png'
import ServiceCard from './ServiceCard/ServiceCard';

const servicesData = [
    {
        icon: icon1,
        name: "SPORTS MASSAGE",
        des: "Provides innovative bodywork and geared toward the needs of athletics",
        price: "$34"
    },
    {
        icon: icon2,
        name: "SPORTS MASSAGE",
        des: "Provides innovative bodywork and geared toward the needs of athletics",
        price: "$34"
    },
    {
        icon: icon4,
        name: "SPORTS MASSAGE",
        des: "Provides innovative bodywork and geared toward the needs of athletics",
        price: "$34"
    },
]

const Services = () => {
    return (
        <section className="py-5 container">
            <h2 className="text-center mb-5">Our Awesome <span className="custom-color">Services</span></h2>
            <div className="row">
                {
                    servicesData.map(service => <ServiceCard key={service.name} service={service} />)
                }
            </div>
            <button className="custom-button-background btn py-3 px-4 text-white mt-5 mx-auto d-block">Explorer More</button>
        </section>
    );
};

export default Services;
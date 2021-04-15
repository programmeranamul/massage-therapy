import React from 'react';
import './ServiceCard.css'

const ServiceCard = ({ service }) => {
    const { serviceName, serviceDescription, serviceCharge, image } = service
    return (
        <div className="col-md-4 mt-5 mt-md-0 d-flex">
            <div className="card text-center py-4 border-0 shadow">
                <img src={`data:image/png;base64,${service.image.img}`} alt={serviceName} className="card-img service-image" />
                <div className="card-body">
                    <h3 className="card-title">{serviceName}</h3>
                    <h4 className="custom-color">${serviceCharge}</h4>
                    <p className="mb-0 mt-2">{serviceDescription}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
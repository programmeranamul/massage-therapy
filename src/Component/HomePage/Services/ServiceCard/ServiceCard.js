import React from 'react';

const ServiceCard = ({ service }) => {
    const { icon, name, des, price } = service
    return (
        <div className="col-md-4 mt-5 mt-md-0 ">
            <div className="card text-center py-4">
                <img src={icon} alt={name} className="w-25 mx-auto" />
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <h4 className="custom-color">{price}</h4>
                    <p className="mb-0 mt-2">{des}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
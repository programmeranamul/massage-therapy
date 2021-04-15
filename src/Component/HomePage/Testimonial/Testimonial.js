import React from 'react';
import './Testimonial.css'

const Testimonial = ({ testimonial }) => {
   const {name, companyName,massage,imgUrl } = testimonial
    return (
        <div className="col-md-4 d-flex">
            <div className="card">
                <div className="card-body py-4">
                    <p className="card-text">{massage}</p>
                </div>
                <div className="card-footer d-flex align-items-center">
                    <img src={imgUrl} alt={name} />
                    <div>
                        <h6>{name}</h6>
                        <p className="m-0">{companyName}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;

import React from 'react';
import './Testimonial.css'

const Testimonial = ({ testimonial }) => {
    const { quote, name, from, img } = testimonial
    return (
        <div className="col-md-4 d-flex">
            <div className="card">
                <div className="card-body py-4">
                    <p className="card-text">{quote}</p>
                </div>
                <div className="card-footer d-flex align-items-center">
                    <img src={img} alt={name} />
                    <div>
                        <h6>{name}</h6>
                        <p className="m-0">{from}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;

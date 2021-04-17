import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';


const Testimonials = () => {

    const[testimonials, setTestimonials] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/reviews')
        .then(res => res.json())
        .then(reviews => setTestimonials(reviews))
    },[])



    return (
        <div className="container py-5">
            <h2 className="text-center mb-5">Testimonials</h2>
            <div className="row">
                {
                    testimonials.map(testimonial => <Testimonial key={testimonial._id} testimonial={testimonial} />)
                }
            </div>

        </div>
    );
};

export default Testimonials;
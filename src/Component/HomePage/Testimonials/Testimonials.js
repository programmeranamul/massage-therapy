import React, { useEffect, useState } from 'react';
import woman1 from '../../../Image/woman1.jpg'
import woman2 from '../../../Image/woman2.jpg'
import woman3 from '../../../Image/woman3.jpg'
import Testimonial from '../Testimonial/Testimonial';


const testimonialData = [
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Wilson Harry',
        from: 'California',
        img: woman1
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Ema Gomez',
        from: 'California',
        img: woman2
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Aliza Farari',
        from: 'California',
        img: woman3
    }
]

///////////
// abar 
//thamo

const Testimonials = () => {

    const[testimonials, setTestimonials] = useState([])

    useEffect(() => {
        fetch('https://fathomless-retreat-05696.herokuapp.com/reviews')
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
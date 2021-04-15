import React from 'react';
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


const Testimonials = () => {
    return (
        <div className="container py-5">
            <h2 className="text-center mb-5">Testimonials</h2>
            <div className="row">
                {
                    testimonialData.map(testimonial => <Testimonial key={testimonial.name} testimonial={testimonial} />)
                }
            </div>

        </div>
    );
};

export default Testimonials;
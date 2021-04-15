import React from 'react';
import Footer from '../../ShearComponent/Footer/Footer';
import Header from '../Header/Header';
import SendMessage from '../SendMessage/SendMessage';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <>           
            <Header />
            <Services />
            <Testimonials />
            <SendMessage />
            <Footer />
        </>
    );
};

export default Home;
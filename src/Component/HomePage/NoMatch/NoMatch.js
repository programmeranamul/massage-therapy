import React from 'react';
import Footer from '../../ShearComponent/Footer/Footer';
import NavBar from '../../ShearComponent/NavBar/NavBar';

const NoMatch = () => {
    return (<>
        <NavBar />
        <div className="text-center py-5 my-5">
            <h2>Sorry, This Page Is Not Found.</h2>           
        </div>
        <Footer className="mt-5" />
    </>
    );
};

export default NoMatch;
import React from 'react';
import './CustomarBookingCard.css'


const CustomarBookingCard = ({ booking }) => {
    console.log(booking)
    return (
        <div className="col-md-6">
            <div className="card px-3">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="customar-order-image-container" >
                        <img src={`data:image/png;base64,${booking.serviceImg.img}`} alt="this is image" />
                    </div>
                    <p className="painding-status mb-0">Peinding</p>
                </div>
                <div className="card-body">
                    <h4></h4>
                </div>
            </div>
        </div>
    );
};

export default CustomarBookingCard;
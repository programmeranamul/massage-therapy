import React from 'react';
import OurTeamCard from '../OurTeamCard/OurTeamCard';
import jue from './../../../Image/team1.jpg'
import najma from './../../../Image/team2.jpg'
import mim from './../../../Image/team3.jpg'


const teamData = [
    { name: "Jue Akrar", facebook: '//facebook.com', instagram: '//instagram.com', img: jue },
    { name: "Najma Sajrin", facebook: '//facebook.com', instagram: '//instagram.com', img: najma },
    { name: "Mim Moni", facebook: '//facebook.com', instagram: '//instagram.com', img: mim },
]

const OurTeam = () => {
    return (
        <section className="py-5 container">
            <h2 className="text-center">Our <span className="custom-color  ">Team</span></h2>
            <p className='text-center font-size-18'>Get to know our team who are at your service</p>
            <div className="row py-5">
                {
                    teamData.map(teamMembar => <OurTeamCard key={teamMembar.name} teamMembar={teamMembar} />)
                }
            </div>
            <button className="custom-button-background btn py-3 px-4 text-white mt-5 mx-auto d-block">Explorer More</button>
        </section>
    );
};

export default OurTeam;
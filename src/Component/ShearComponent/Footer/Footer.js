import React from 'react';
import FooterColumn from '../FooterColumn/FooterColumn';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faInstagram,
    faLinkedinIn,
    faYoutube
} from "@fortawesome/free-brands-svg-icons";

const noNamed = [
    { name: "Emergency Dental Care", link: "/emergency" },
  
];
const company = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Project", link: "/project" },
    { name: "Our Team", link: "//ourTeam" },
    { name: "Tarms Conditions", link: "/tarmsCondition" },
    { name: "Submit Listing", link: "/submitListing" }    
];
const QuickLinks = [
    { name: "Quick Links", link: "/quickLinks" },
    { name: "Rentals", link: "/rentals" },
    { name: "Sales", link: "/sales" },
    { name: "", link: "/tooth-extract" },
    { name: "Check Up", link: "/checkup" },
    { name: "Check Up", link: "/checkup" },
    { name: "Check Up", link: "/checkup" },
];
const services = [
    { name: "Emergency Dental Care", link: "/emergency" },
    { name: "Check Up", link: "/checkup" },
    { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
    { name: "Tooth Extraction", link: "/tooth-extract" },
    { name: "Check Up", link: "/checkup" },
    { name: "Check Up", link: "/checkup" },
    { name: "Check Up", link: "/checkup" },
];



const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <FooterColumn menuTitle={''} menuItems={noNamed} />
                    <FooterColumn menuTitle={'Company'} menuItems={company} />
                    <FooterColumn menuTitle={"QuickLinks"} menuItems={QuickLinks} />
                    <FooterColumn menuTitle={"services"} menuItems={services}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item">
                                <a target="_blanck" href="//facebook.com">
                                    <FontAwesomeIcon
                                        className="icon active-icon"
                                        icon={faFacebookF}
                                    />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a target="_blanck" href="//google.com">
                                    <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a target="_blanck" href="//instagram.com">
                                    <FontAwesomeIcon className="icon" icon={faInstagram} />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a target="_blanck" href="//instagram.com">
                                    <FontAwesomeIcon className="icon" icon={faYoutube} />
                                </a>
                            </li>
                        </ul>
                    </FooterColumn>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright &#169; {new Date().getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
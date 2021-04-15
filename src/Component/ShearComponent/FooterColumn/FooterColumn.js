import React from 'react';
import { Link } from "react-router-dom";
import './FooterColumn.css'

const FooterColumn = (props) => {
    return (
        <div className="col-md-3">
            <h5 className="custom-color footer-title">
                {props.menuTitle ? props.menuTitle : "  "}
            </h5>
            <ul className="list-unstyled mt-4">
                {props.menuItems.map((item, index) => (
                    <li key={index} className="pb-3">
                        <Link to={item.link} className="text-secondary">
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
            {props.children && props.children}
        </div>
    );
};

export default FooterColumn;
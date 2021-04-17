import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers } from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import './SideBar.css'
import logo from '../../../Image/logo1.png'
import { userContext } from '../../../App';
import firebase from "firebase/app";


const SideBar = ({ url }) => {
    const history = useHistory();

    const [logedInUser, setLogedInUser] = useContext(userContext)
    //const [singOutUser, setSingOutUser] = useState({})

    const logInUser = JSON.parse(localStorage.getItem('user'))

    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        fetch('http://localhost:8000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: logInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])

    console.log(isAdmin)


    const handelLogOut = () => {
        firebase.auth().signOut().then(() => {
            localStorage.clear()
            history.push("/")
        }).catch((error) => {
            console.log(error)
        });
    }

    return (
        <section className="sidebar d-flex flex-column justify-content-between col-2 pt-3 pb-5 pl-4">
            <ul className="list-unstyled">
                <li >
                    <Link to="/">
                        <img src={logo} alt="Logo" className="logo" />
                    </Link>
                </li>

                {isAdmin ? <div>
                    <li >
                        <Link to={`${url}/adminBookingList`}>
                            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Booking List</span>
                        </Link>
                    </li>

                    <li>
                        <Link to={`${url}/makeAdmin`} >
                            <FontAwesomeIcon icon={faCalendar} /> <span>Add Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={`${url}/addService`} >
                            <FontAwesomeIcon icon={faUsers} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={`${url}/manageService`} >
                            <FontAwesomeIcon icon={faUsers} /> <span>Manage Service</span>
                        </Link>
                    </li>
                </div> : <div>

                    <li >
                        <Link to={`${url}/booking`}>
                            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Book</span>
                        </Link>
                    </li>
                    <li >
                        <Link to={`${url}/customarBookingList`}>
                            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Booking List</span>
                        </Link>
                    </li>
                    <li >
                        <Link to={`${url}/review`}>
                            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Review</span>
                        </Link>
                    </li>
                </div>
                }

            </ul>
            <div>
                <button onClick={handelLogOut} className="logOut-button" >
                    <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
                </button>
            </div>
        </section>
    );
};

export default SideBar;
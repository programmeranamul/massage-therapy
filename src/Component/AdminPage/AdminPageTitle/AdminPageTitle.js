import React, { useContext } from 'react';
import { userContext } from '../../../App';

const AdminPageTitle = ({ title }) => {
    const [logedInUser, setLogedInUser] = useContext(userContext);
    const logInUser = JSON.parse(localStorage.getItem('user'))
    return (
        <div className="py-3 px-5 bg-white mb-5 d-flex justify-content-between align-items-center">
            <h4>{title}</h4>
            {/* <img className="avatar" src={logedInUser.photoURL || "https://i.ibb.co/JqYKzYK/avatar.jpg"} alt={logedInUser.displayName || logedInUser.email} /> */}
            <h5>{logInUser.displayName}</h5>
        </div>
    );
};

export default AdminPageTitle;
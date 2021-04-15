import React, { useContext } from 'react';
import { userContext } from '../../../App';
import {
    Route,
    Redirect,
} from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
    const [logedInUser, setLogedInUser] = useContext(userContext);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                // logedInUser.email || localStorage.getItem('user') ? (
                localStorage.getItem('user') ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    )
};

export default PrivateRoute;
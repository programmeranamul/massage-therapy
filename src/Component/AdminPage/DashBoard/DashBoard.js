import React, { useContext, useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar'
import './DashBoard.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import AddAdmin from '../AddAdmin/AddAdmin'
import AddService from '../AddService/AddService';
import { userContext } from '../../../App';
import AddReview from '../AddReview/AddReview';

const DashBoard = () => {
    const { path, url } = useRouteMatch();
    


    return (
        <main>
            <div className="row">
                <div className="side-menu">
                    <SideBar url={url} />
                </div>
                <div className="service-page-main-section">
                    <Switch>
                        <Route exact path={path}>
                            <h3>Please select a topic.</h3>
                        </Route>
                        <Route path={`${path}/makeAdmin`}>
                            <AddAdmin />
                        </Route>
                        <Route path={`${path}/addService`}>
                            <AddService />
                        </Route>
                        <Route path={`${path}/review`}>
                            <AddReview />
                        </Route>
                    </Switch>
                </div>
            </div>
        </main>
    );
};

export default DashBoard;
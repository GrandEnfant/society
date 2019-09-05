import React from 'react';
import './App.css';
import NavLink from "./NavLink"


function LeftSideBar() {
    return (
        <div className="UserMiniInfo">
            <div className="miniProfile">
            <div className="photo"></div>
            <div className="shortInfo"></div>
            </div>
            <NavLink></NavLink>

        </div>
    );
}

export default LeftSideBar;
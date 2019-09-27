import React from 'react';
import '../App.css';
import NavLinks from "./NavLink/NavLinks";

function LeftSideBar(props) {
    return (
        <div className="UserMiniInfo">
            <div className="miniProfile">
            <div className="photo"></div>
            <div className="shortInfo"></div>
            </div>
            <NavLinks ></NavLinks>
        </div>
    );
}

export default LeftSideBar;
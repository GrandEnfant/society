import React from 'react';
import './App.css';
import NavLinks from "./Components/NavLinks"


function LeftSideBar() {
    return (
        <div className="UserMiniInfo">
            <div className="miniProfile">
            <div className="photo"></div>
            <div className="shortInfo"></div>
            </div>
            <NavLinks></NavLinks>

        </div>
    );
}

export default LeftSideBar;
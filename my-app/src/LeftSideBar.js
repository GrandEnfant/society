import React from 'react';
import './App.css';
import NavLinks from "./Components/NavLink/NavLinks";
import Friends from './Components/Profile/Friends'



function LeftSideBar(props) {
    return (
        <div className="UserMiniInfo">
            <div className="miniProfile">
            <div className="photo"></div>
            <div className="shortInfo"></div>
            </div>
            <NavLinks ></NavLinks>
            <Friends friends={props.State.friends}></Friends>

        </div>
    );
}

export default LeftSideBar;
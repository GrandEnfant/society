import React from 'react';
import './App.css';
import './font-awesome-4.7.0/css/font-awesome.css';



function Header() {
    return (
        <header>
            <div className="centralContainer mainContainer">
            <div className="logo-line"><i className="fa fa-id-card" aria-hidden="true"></i></div>
                <div className="registration icon">
                    <a className="icon" href="/Registration"><i className="fa fa-user-plus" aria-hidden="true"></i></a>
                    <a className="icon" href="/Login"><i className="fa fa-sign-in" aria-hidden="true"></i> </a>
                </div>
            </div>
        </header>
);
}

export default Header;
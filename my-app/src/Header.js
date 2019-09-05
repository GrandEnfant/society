import React from 'react';
import './App.css';


function Header() {
    return (
        <header>
        <div className="registration">
            <a href="/Registration">Регистрация</a>
            <a href="Login"> Залогиниться </a>
        </div>
        </header>
);
}

export default Header;
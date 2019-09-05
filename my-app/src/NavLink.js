import React from 'react';
import './App.css';


function NavLink() {
    return (
        <div className = "listMenu">
            <ul>
                <li><a href="/MainYourProfile">Главная</a></li>
                <li><a href="/News">Новости</a></li>
                <li><a href="/Rules">Правила</a></li>
            </ul>
        </div>

    );
}

export default NavLink;
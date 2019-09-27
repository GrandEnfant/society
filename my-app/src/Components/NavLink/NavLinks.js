import React from 'react';
import '../../App.css';
import { NavLink } from "react-router-dom";


function NavLinks() {
    return (
        <div className = "listMenu">
            <ul>
                <li><NavLink to="/MainYourProfile">Главная</NavLink></li>
                <li><NavLink to="/News">Новости</NavLink></li>
                <li><NavLink to="/Rules">Правила</NavLink></li>
                <li><NavLink to="/Dialogs">Сообщения</NavLink></li>
                <li><NavLink to="/Friends">Друзья</NavLink></li>
            </ul>

        </div>

    );
}

export default NavLinks;
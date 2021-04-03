import React from 'react';
import '../App.css'

const NavBar = () => {
    return (
        <nav className='nav'>
            <div>
                <a href="/">Профиль</a>
            </div>
            <div>
                <a href="/">Сообщения</a>

            </div>
            <div>
                <a href="/">Лента</a>
            </div>
            <br/>
            <div>
                <a href="/">Настройки</a>
            </div>
        </nav>
    );
};

export default NavBar;

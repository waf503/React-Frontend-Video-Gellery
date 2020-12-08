import React from 'react'
import '../assets/styles/components/Header.scss'
import logoUser from '../assets/img/user-icon.png'
const Header = () =>(
    <header className="header">
        <h1 className="header__img">My Gallery</h1>
        <div className="header__menu">
        <div className="header__menu--profile">
            <img src={logoUser} alt="" />
            <p>Perfil</p>
        </div>
        <ul>
            <li><a href="/">Cuenta</a></li>
            <li><a href="/">Cerrar Sesión</a></li>
        </ul>
        </div>
    </header>
)
export default Header


import React from 'react'
import './Header.css'
import TeslaLogo from '../assets/teslaLogo.svg'
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__logo">
                    <img src={TeslaLogo} alt="tesla logo" /> 
                </div>

                <ul className="header__center">
                    <li>Model S</li>
                    <li>Model 3</li>
                    <li>Model X</li>
                    <li>Model Y</li>
                    <li>Solar Roof</li>
                    <li>Solar Panels</li>
                </ul>

           <div className="header__right">
                <ul className="header__right__options">
                    <li>Shop</li>
                    <li>Tesla Account</li>
                </ul>
                <div className="header__right__brg-menu">
                    <MenuIcon/>
                </div>
           </div> 
            </div>
        </div>
    )
}

export default Header

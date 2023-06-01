import { useState } from "react"

// Assets
import logo from '../assets/images/logo.svg'
import cartLogo from '../assets/images/icon-cart.svg'
import profileAvatar from '../assets/images/image-avatar.png'

const Header = () => 
{
    const [ cartIsOpen, setCart ] = useState(false)

    return(
        <header className="container">
            <div className="header-content">
                <div className="header-side">
                    <img className="sneaker-logo" src={logo} alt="seankers logo"/>
                    <nav className="header-nav">
                        <ul className="header-nav-list">
                            <li className="header-nav-element">
                                <a className="header-nav-link" href="#">Collections</a>
                            </li>
                            <li className="header-nav-element">
                                <a className="header-nav-link" href="#">Men</a>
                            </li>
                            <li className="header-nav-element">
                                <a className="header-nav-link active" href="#">Women</a>
                            </li>
                            <li className="header-nav-element">
                                <a className="header-nav-link" href="#">About</a>
                            </li>
                            <li className="header-nav-element">
                                <a className="header-nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="header-side">
                    <button className="cart-button" title="open cart"  onClick={ ()=> setCart(!cartIsOpen) }>
                        <img className="icon-size-1" src={cartLogo} alt="cart-logo"/>
                        <span className="items-count">3</span>
                    </button>
                    <a className="profile-link" href="#">
                        <img className="profile-avatar" src={profileAvatar} alt="profile picture"/>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header
import { useEffect, useState } from "react"

import logo from '../assets/images/logo.svg'
import cartLogo from '../assets/images/icon-cart.svg'
import profileAvatar from '../assets/images/image-avatar.png'
import menuIcon from '../assets/images/icon-menu.svg'
import closeIcon from '../assets/images/icon-close.svg'
interface Props {
    menuIsOpen: boolean;
    handleMenuToggle: (val: boolean) => void;
}
const Header: React.FC<Props> = (props) => {
    const { menuIsOpen } = props
    const [ cartIsOpen, setCart ] = useState<boolean>(false)
    const [ itemCount, setItemCount ] = useState<number>(2)
    useEffect(()=> props.handleMenuToggle(menuIsOpen),[props])
    return(
        <header className="container">
            <div className="header-content">
                <div className="header-side">
                    <button className="burger-button" title="open menu" onClick={ ()=> props.handleMenuToggle(true)}>
                        <img src={menuIcon} alt="Menu icon"/>
                    </button>
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
                        {itemCount > 0 ? (
                            <span className="items-count">{itemCount}</span>
                        ) : null}
                    </button>
                    <a className="profile-link" href="#">
                        <img className="profile-avatar" src={profileAvatar} alt="profile picture"/>
                    </a>
                </div>
            </div>
            <nav className={`burger-menu ${menuIsOpen ? 'active' : null}`}>
                <button className="close-button" title="close menu" onClick={()=> props.handleMenuToggle(false)}>
                    <img className="close-icon" src={closeIcon} alt="close icon"/>
                </button>
                <ul className="menu-list">
                    <li className="menu-element">
                        <a className="menu-link" href="#" >Collections</a>
                    </li>
                    <li className="menu-element">
                        <a className="menu-link" href="#" >Men</a>
                    </li>
                    <li className="menu-element">
                        <a className="menu-link" href="#" >Women</a>
                    </li>
                    <li className="menu-element">
                        <a className="menu-link" href="#" >About</a>
                    </li>
                    <li className="menu-element">
                        <a className="menu-link" href="#" >Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header
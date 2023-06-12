import { useEffect, useState } from "react"
// Assets
import logo from '../assets/images/logo.svg'
import profileAvatar from '../assets/images/image-avatar.png'
import menuIcon from '../assets/images/icon-menu.svg'
import closeIcon from '../assets/images/icon-close.svg'
import iconDelete from '../assets/images/icon-delete.svg'
import productImage from '../assets/images/image-product-1-thumbnail.jpg'
interface Props {
    cartItems: cartItem[]
    menuIsOpen: boolean
    handleMenuToggle: (val: boolean) => void
    removeItem: (index: number) => void
}
interface productData{
    name: string,
    description: string,
    price: number,
    discount: number,
    image: number[],
    images: string[]
}

interface cartItem {
    productData: productData,
    quantity: number
}
const Header: React.FC<Props> = (props) => {
    const { menuIsOpen, cartItems } = props
    const [ cartIsOpen, setCart ] = useState<boolean>(false)
    const [ cartExit, setCartExit ] = useState<boolean>(false)
    const [ cartTotalItems, setCartTotalItems ] = useState<number>(0)
    const changeCartStatus = () => {
        if(cartIsOpen){
            setCartExit(true)
        }
        setCart(!cartIsOpen)
    }
    useEffect(()=> {
        props.handleMenuToggle(menuIsOpen)
        let itemsQuantity = 0
        for(let el of props.cartItems) itemsQuantity += el.quantity
        setCartTotalItems(itemsQuantity)
    },[props])
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
                    <div className="cart-wrapper">
                        <button className="cart-button" title="open cart"  onClick={ ()=> changeCartStatus()}>
                            <svg className="cart-icon" width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill-rule="nonzero"/></svg>
                            {cartTotalItems > 0 ? (
                                <span className="items-count">{cartTotalItems}</span>
                            ) : null}
                        </button>
                        <div className={`cart-modal ${cartIsOpen ? 'active' : ''} ${cartExit ? 'out' : ''}`} onAnimationEnd={()=> cartExit ? setCartExit(false) : null}>
                            <div className="cart-head">Cart</div>
                            <div className="cart-content">
                                {cartItems.length > 0 ? (
                                    <>
                                        <ul className="cart-list">
                                            {cartItems.map((item,i)=>(
                                                <li className="cart-element" key={i}>
                                                    {/* in real data we should get the thumbnail in the product object or with infos in it*/}
                                                    <img className="product-image" src={productImage} alt="Product image"/>
                                                    <div className="product-infos">
                                                        <div className="product-name">{item.productData.name}</div>
                                                        <div className="product-quantity">
                                                            ${(item.productData.price - ((item.productData.price/100)*item.productData.discount)).toFixed(2)} x {item.quantity + ' '}
                                                            <span className="total-price"> 
                                                                ${((item.productData.price - ((item.productData.price/100)*item.productData.discount)) * item.quantity).toFixed(2)}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <button className="remove-button" title="remove item" onClick={()=>props.removeItem(i)}>
                                                        <img src={iconDelete} alt="delete icon"/>
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                        <a className="button-1" href="#">Checkout</a>
                                    </>
                                ) :
                                (
                                    <div className="empty-text" >Your cart is empty</div>
                                )}
                            </div>
                        </div>
                    </div>
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
import { useState, useEffect } from 'react'
// Assets
import iconCart from '../assets/images/icon-cart-white.svg'
import iconMinus from '../assets/images/icon-minus.svg'
import iconPlus from '../assets/images/icon-plus.svg'
import iconNext from '../assets/images/icon-next.svg'
import iconPrevious from '../assets/images/icon-previous.svg'
import iconClose from '../assets/images/icon-close.svg'

const ProductPresentation: React.FC = ()=> {
interface Props {
    // carouselIsOpen: boolean;
    // handleCarouselToggle: (val: boolean) => void;
    addItemToCart: (productData: object, quantity: number) => void
}

const ProductPresentation: React.FC<Props> = (props)=> {
    const [ activeImage, setActiveImage ] = useState<number>(1)
    const [ cartPress, setCartPress ] = useState<boolean>(false)
    const [ nextButtonPress, setNextButtonPress ] = useState<boolean>(false)
    const [ prevButtonPress, setPrevButtonPress ] = useState<boolean>(false)
    const [ productQuantity, setProductQuantity ] = useState<number>(0)
    const [ carouselIsOpen, setCarouselIsOpen ] = useState<boolean>(false)

    // To simulate real data and render with a map
    const imagesData = [1,2,3,4]
    // To simulate real data
    const productData = {
        name: "Fall Limited Edition Sneakers",
        description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
        price: 250.00,
        discount: 50,
        images: [1,2,3,4]
    }

    const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max)

    const carouselNext = ( ) => {
    const carouselNext = () => {
        setNextButtonPress(true)
        if(activeImage + 1 > imagesData.length) setActiveImage(1)
        if(activeImage + 1 > productData.images.length) setActiveImage(1)
        else setActiveImage(activeImage + 1)
    }

    const carouselPrev = ( ) => {
    const carouselPrev = () => {
        setPrevButtonPress(true)
        if(activeImage - 1 < 1) setActiveImage(imagesData.length)
        if(activeImage - 1 < 1) setActiveImage(productData.images.length)
        else setActiveImage(activeImage - 1)
    }

    // useEffect(()=>{console.log(carouselIndex)},[carouselIndex])
    const addToCart = () => {
        setCartPress(true)
        if(productQuantity > 0){
            props.addItemToCart(productData,productQuantity)
        }
    }

    return(
        <section className="product-presentation">
            <div className="product-carousel">
            <div className={`product-carousel ${carouselIsOpen ? 'active' : ''}`}>
                <div className="product-image-grid">
                    <button className="close-carousel-button" title="close carousel" onClick={()=> setCarouselIsOpen(false)}>
                        <svg className="close-icon" width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill-rule="evenodd"/></svg>
                    </button>
                    <div className="big-image-wrapper">
                        <button className={`prev-button ${prevButtonPress ? 'press' : ''}`} title="Previous image" onClick={()=> carouselPrev()} onAnimationEnd={()=> setPrevButtonPress(false)}>
                            <img src={iconPrevious} alt="Next icon" />
@@ -48,7 +69,7 @@ const ProductPresentation: React.FC = ()=> {
                        </button>
                    </div>
                    <ul className="product-image-thumbnails">
                        {imagesData.map((v,i)=>(
                        {productData.images.map((v,i)=>(
                            <li className={`product-image-grid-element ${activeImage == v ? 'active' : ''}`} key={i} onClick={()=> setActiveImage(v)}>
                                <img className="product-image" src={`/src/assets/images/image-product-${v}-thumbnail.jpg`} alt="Product image" />
                            </li>
@@ -58,9 +79,9 @@ const ProductPresentation: React.FC = ()=> {
            </div>
            <div className="container">
                <div className="product-image-grid">
                    <img className="product-big-image" src={`/src/assets/images/image-product-${activeImage}.jpg`} alt="Product image" />
                    <img className="product-big-image" src={`/src/assets/images/image-product-${activeImage}.jpg`} alt="Product image" onClick={()=>setCarouselIsOpen(true)} />
                    <ul className="product-image-thumbnails">
                        {imagesData.map((v,i)=>(
                        {productData.images.map((v,i)=>(
                            <li className={`product-image-grid-element ${activeImage == v ? 'active' : ''}`} key={i} onClick={()=> setActiveImage(v)}>
                                <img className="product-image" src={`/src/assets/images/image-product-${v}-thumbnail.jpg`} alt="Product image" />
                            </li>
@@ -69,14 +90,18 @@ const ProductPresentation: React.FC = ()=> {
                </div>
                <div className="product-infos">
                    <span className="company-name">Sneaker company</span>
                    <h1 className="product-name">Fall Limited Edition Sneakers</h1>
                    <p className="product-description">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
                    <h1 className="product-name">{productData.name}</h1>
                    <p className="product-description">{productData.description}</p>
                    <div className="price-wrapper">
                        <div className="actual-price-wrapper">
                            <div className="price">$125.00</div>
                            <div className="discount">50%</div>
                            <div className="price">${(productData.price - ((productData.price/100)*productData.discount)).toFixed(2)}</div>
                            {productData.discount ? (
                                <div className="discount">{productData.discount}%</div>
                            ) : ''}
                        </div>
                        <div className="old-price">$250.00</div>
                        {productData.discount ? (
                            <div className="old-price">${productData.price.toFixed(2)}</div>
                        ) : ''}
                    </div>

                    <div className="product-interactions">
@@ -89,7 +114,7 @@ const ProductPresentation: React.FC = ()=> {
                                <img src={iconPlus} alt="plus icon" />
                            </button>
                        </div>
                        <button className={`button-1 add-to-cart ${cartPress ? 'press' : ''}`} title="add to cart" onClick={()=> setCartPress(true)} onAnimationEnd={()=> setCartPress(false)}>
                        <button className={`button-1 add-to-cart ${cartPress ? 'press' : ''}`} title="add to cart" onClick={()=> addToCart()} onAnimationEnd={()=> setCartPress(false)}>
                            <img src={iconCart} alt="cart icon" />
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default  ProductPresentation
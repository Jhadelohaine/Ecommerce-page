import { useState, useEffect } from 'react'

// Assets
import iconCart from '../assets/images/icon-cart-white.svg'
import iconMinus from '../assets/images/icon-minus.svg'
import iconPlus from '../assets/images/icon-plus.svg'
import iconNext from '../assets/images/icon-next.svg'
import iconPrevious from '../assets/images/icon-previous.svg'
import iconClose from '../assets/images/icon-close.svg'

const ProductPresentation: React.FC = ()=> {
    const [ activeImage, setActiveImage ] = useState<number>(1)
    const [ cartPress, setCartPress ] = useState<boolean>(false)
    const [ nextButtonPress, setNextButtonPress ] = useState<boolean>(false)
    const [ prevButtonPress, setPrevButtonPress ] = useState<boolean>(false)
    const [ productQuantity, setProductQuantity ] = useState<number>(0)

    // To simulate real data and render with a map
    const imagesData = [1,2,3,4]

    const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max)

    const carouselNext = ( ) => {
        setNextButtonPress(true)
        if(activeImage + 1 > imagesData.length) setActiveImage(1)
        else setActiveImage(activeImage + 1)
    }

    const carouselPrev = ( ) => {
        setPrevButtonPress(true)
        if(activeImage - 1 < 1) setActiveImage(imagesData.length)
        else setActiveImage(activeImage - 1)
    }

    // useEffect(()=>{console.log(carouselIndex)},[carouselIndex])

    return(
        <section className="product-presentation">
            <div className="product-carousel">
                <div className="product-image-grid">
                    <div className="big-image-wrapper">
                        <button className={`prev-button ${prevButtonPress ? 'press' : ''}`} title="Previous image" onClick={()=> carouselPrev()} onAnimationEnd={()=> setPrevButtonPress(false)}>
                            <img src={iconPrevious} alt="Next icon" />
                        </button>
                        <img className="product-big-image" src={`/src/assets/images/image-product-${activeImage}.jpg`} alt="Product image" />
                        <button className={`next-button ${nextButtonPress ? 'press' : ''}`} title="Next image" onClick={()=> carouselNext()} onAnimationEnd={()=> setNextButtonPress(false)}>
                            <img src={iconNext} alt="Next icon" />
                        </button>
                    </div>
                    <ul className="product-image-thumbnails">
                        {imagesData.map((v,i)=>(
                            <li className={`product-image-grid-element ${activeImage == v ? 'active' : ''}`} key={i} onClick={()=> setActiveImage(v)}>
                                <img className="product-image" src={`/src/assets/images/image-product-${v}-thumbnail.jpg`} alt="Product image" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="container">
                <div className="product-image-grid">
                    <img className="product-big-image" src={`/src/assets/images/image-product-${activeImage}.jpg`} alt="Product image" />
                    <ul className="product-image-thumbnails">
                        {imagesData.map((v,i)=>(
                            <li className={`product-image-grid-element ${activeImage == v ? 'active' : ''}`} key={i} onClick={()=> setActiveImage(v)}>
                                <img className="product-image" src={`/src/assets/images/image-product-${v}-thumbnail.jpg`} alt="Product image" />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="product-infos">
                    <span className="company-name">Sneaker company</span>
                    <h1 className="product-name">Fall Limited Edition Sneakers</h1>
                    <p className="product-description">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
                    <div className="price-wrapper">
                        <div className="actual-price-wrapper">
                            <div className="price">$125.00</div>
                            <div className="discount">50%</div>
                        </div>
                        <div className="old-price">$250.00</div>
                    </div>

                    <div className="product-interactions">
                        <div className="quantity-selector">
                            <button className="less-button" title="remove" onClick={()=> setProductQuantity(clamp(productQuantity-1,0,100))}>
                                <img src={iconMinus} alt="minus icon" />
                            </button>
                            <span className="quantity-indicator">{productQuantity}</span>
                            <button className="more-button" title="add" onClick={()=> setProductQuantity(clamp(productQuantity+1,0,100))}>
                                <img src={iconPlus} alt="plus icon" />
                            </button>
                        </div>
                        <button className={`button-1 add-to-cart ${cartPress ? 'press' : ''}`} title="add to cart" onClick={()=> setCartPress(true)} onAnimationEnd={()=> setCartPress(false)}>
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
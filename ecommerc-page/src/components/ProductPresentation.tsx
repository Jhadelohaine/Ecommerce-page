import { useEffect, useState } from 'react'

// Assets
import iconCart from '../assets/images/icon-cart-white.svg'
import iconMinus from '../assets/images/icon-minus.svg'
import iconPlus from '../assets/images/icon-plus.svg'
import iconNext from '../assets/images/icon-next.svg'
import iconPrevious from '../assets/images/icon-previous.svg'

// productImage
import productImage1 from '../assets/images/image-product-1.jpg'
import productImage1Thumbnail from '../assets/images/image-product-1-thumbnail.jpg'
import productImage2 from '../assets/images/image-product-2.jpg'
import productImage2Thumbnail from '../assets/images/image-product-2-thumbnail.jpg'
import productImage3 from '../assets/images/image-product-3.jpg'
import productImage3Thumbnail from '../assets/images/image-product-3-thumbnail.jpg'
import productImage4 from '../assets/images/image-product-4.jpg'
import productImage4Thumbnail from '../assets/images/image-product-4-thumbnail.jpg'

interface Props {
    addItemToCart: (productData: productData, quantity: number) => void
}

interface productData{
    name: string,
    description: string,
    price: number,
    discount: number,
    images: string[]
}

const ProductPresentation: React.FC<Props> = (props)=> {
    const [ activeImage, setActiveImage ] = useState<number>(1)
    const [ cartPress, setCartPress ] = useState<boolean>(false)
    const [ nextButtonPress, setNextButtonPress ] = useState<boolean>(false)
    const [ prevButtonPress, setPrevButtonPress ] = useState<boolean>(false)
    const [ productQuantity, setProductQuantity ] = useState<number>(0)
    const [ carouselIsOpen, setCarouselIsOpen ] = useState<boolean>(false)

    useEffect(()=>{console.log(activeImage)},[activeImage])

    // To simulate real data
    const productData = {
        name: "Fall Limited Edition Sneakers",
        description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
        price: 250.00,
        discount: 50,
        images: [productImage1,productImage2,productImage3,productImage4],
        imagesThumbnails: [productImage1Thumbnail,productImage2Thumbnail,productImage3Thumbnail,productImage4Thumbnail]
    }

    const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max)

    const carouselNext = () => {
        setNextButtonPress(true)
        if(activeImage + 1 > productData.images.length) setActiveImage(1)
        else setActiveImage(activeImage + 1)
    }

    const carouselPrev = () => {
        setPrevButtonPress(true)
        if(activeImage - 1 < 1) setActiveImage(productData.images.length)
        else setActiveImage(activeImage - 1)
    }

    const addToCart = () => {
        setCartPress(true)
        if(productQuantity > 0){
            props.addItemToCart(productData,productQuantity)
        }
    }

    return(
        <section className="product-presentation">
            <div className={`product-carousel ${carouselIsOpen ? 'active' : ''}`}>
                <div className="product-image-grid">
                    <button className="close-carousel-button" title="close carousel" onClick={()=> setCarouselIsOpen(false)}>
                        <svg className="close-icon" width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill-rule="evenodd"/></svg>
                    </button>
                    <div className="big-image-wrapper">
                        <button className={`prev-button ${prevButtonPress ? 'press' : ''}`} title="Previous image" onClick={()=> carouselPrev()} onAnimationEnd={()=> setPrevButtonPress(false)}>
                            <img src={iconPrevious} alt="Next icon" />
                        </button>
                        <img className="product-big-image" src={productData.images[activeImage - 1]} alt="Product image" />
                        <button className={`next-button ${nextButtonPress ? 'press' : ''}`} title="Next image" onClick={()=> carouselNext()} onAnimationEnd={()=> setNextButtonPress(false)}>
                            <img src={iconNext} alt="Next icon" />
                        </button>
                    </div>
                    <ul className="product-image-thumbnails">
                        {productData.imagesThumbnails.map((v,i)=>(
                            <li className={`product-image-grid-element ${activeImage == productData.imagesThumbnails.indexOf(v) + 1 ? 'active' : ''}`} key={i} onClick={()=> setActiveImage(productData.imagesThumbnails.indexOf(v) + 1)}>
                                <img className="product-image" src={productData.imagesThumbnails[i]}  alt="Product image" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="container">
                <div className="product-image-grid">
                    <img className="product-big-image" src={productData.images[activeImage - 1]} alt="Product image" onClick={()=>setCarouselIsOpen(true)} />
                    <ul className="product-image-thumbnails">
                        {productData.imagesThumbnails.map((v,i)=>(
                            <li className={`product-image-grid-element ${activeImage == productData.imagesThumbnails.indexOf(v) + 1 ? 'active' : ''}`} key={i} onClick={()=> setActiveImage(productData.imagesThumbnails.indexOf(v) + 1)}>
                                <img className="product-image" src={v} alt="Product image" />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="product-infos">
                    <span className="company-name">Sneaker company</span>
                    <h1 className="product-name">{productData.name}</h1>
                    <p className="product-description">{productData.description}</p>
                    <div className="price-wrapper">
                        <div className="actual-price-wrapper">
                            <div className="price">${(productData.price - ((productData.price/100)*productData.discount)).toFixed(2)}</div>
                            {productData.discount ? (
                                <div className="discount">{productData.discount}%</div>
                            ) : ''}
                        </div>
                        {productData.discount ? (
                            <div className="old-price">${productData.price.toFixed(2)}</div>
                        ) : ''}
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
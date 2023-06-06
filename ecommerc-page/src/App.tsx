import {  useState } from 'react'
import Header from './components/Header'
import './styles/css/style.css'
import ProductPresentation from './components/ProductPresentation'
interface productData{
  name: string,
  description: string,
  price: number,
  discount: number,
  image: number[]
  images: string[]
}

interface cartItem {
  productData: productData,
  quantity: number
}
function App() {
  const [ menuIsOpen, setMenuIsOpen ] = useState<boolean>(false)
  const [ cartItems, setCartItems ] = useState<cartItem[]>([])
  const handleCartChange = (productData: productData, quantity: number) => {
    let item = cartItems.find(e => e.productData.name == productData.name)
    let itemExist = cartItems.indexOf(item!)
    if(itemExist >= 0){
      let items = cartItems
      cartItems[itemExist].quantity += quantity
      setCartItems([...items]) 
    }else{
      setCartItems([...cartItems, {productData: productData, quantity: quantity}])
    }
  }
  const removeItem = (index: number) => {
    let items = cartItems
    items.splice(index,1)
    setCartItems([...items])
  }
  return (
    <div className="App">
      <div className={`background-mask ${menuIsOpen ? 'active' : null}`} onClick={()=>setMenuIsOpen(false)}></div>
      <Header handleMenuToggle={(isOpen)=>setMenuIsOpen(isOpen)} menuIsOpen={menuIsOpen} cartItems={cartItems} removeItem={(index)=>removeItem(index)}/>
      <ProductPresentation addItemToCart={(productData, quantity)=>handleCartChange(productData, quantity)}/>
    </div>
  )
}
export default App
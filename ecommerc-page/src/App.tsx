import { useEffect, useState } from 'react'
import Header from './components/Header'

import './styles/css/style.css'
import ProductPresentation from './components/ProductPresentation'

function App() {
  const [ menuIsOpen, setMenuIsOpen ] = useState<boolean>(false)
  const [ cartItems, setCartItems ] = useState<object[]>([])

  useEffect(()=> {console.log(cartItems)},[cartItems])

  const handleCartChange = (productData: object, quantity: number) => {
    let itemExist = cartItems.indexOf(cartItems.find(e => e.productData.name == productData.name))
    if(itemExist >= 0){
      console.log(itemExist)
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